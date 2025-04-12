import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, UserInfo } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppUser {
  readonly displayName: string | null;
  readonly email: string | null;
  readonly phoneNumber: string | null;
  readonly photoURL: string | null;
  readonly uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<AppUser | null>(null);
  user$: Observable<AppUser | null> = this.userSubject.asObservable();

  private readonly auth = inject(Auth);
  private readonly firestore = inject(Firestore);

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        await this.fetchUserDetails(user);
      } else {
        this.userSubject.next(null);
      }
    });
  }

  private async fetchUserDetails(user: User) {
    try {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data() as AppUser;
        console.log(userData);
        this.userSubject.next(userData);
      } else {
        console.warn('User document not found in Firestore');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  getUser(): AppUser | null {
    return this.userSubject.value;
  }

  async updateUserInfo(data: Partial<AppUser>): Promise<void> {
    const user = this.getUser();

    if (!user || !user.uid) {
      console.error('No authenticated user to update.');
      return;
    }

    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    try {
      await updateDoc(userDocRef, data);
      const updatedUser = { ...user, ...data };

      this.userSubject.next(updatedUser);
    } catch (error) {
      console.error('Failed to update user data:', error);
    }
  }

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
      const { user } = result;

      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const userSnap = await getDoc(userDocRef);

      if (!userSnap.exists()) {
        const newUser: AppUser = {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        }

        await setDoc(userDocRef, newUser);
      }
    } catch (error) {
      console.log(error);
      throw new Error(`Google sign-in failed`);
    }
  }

}

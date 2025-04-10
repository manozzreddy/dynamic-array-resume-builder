import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  Auth,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = signal(false);
  isLoginInProgress = signal(false);
  errorMessage = signal<string | null>(null);

  private readonly auth = inject(Auth);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  authForm = this.fb.group({
    email: this.fb.control<string>('', [Validators.required, Validators.email]),
    password: this.fb.control<string>('', [Validators.required]),
    rememberMe: this.fb.control<boolean>(false),
  });

  toggleShowPassword(): void {
    this.showPassword.update((value) => !value);
  }

  async onSubmit(): Promise<void> {
    if (!this.authForm.valid) {
      this.authForm.markAllAsTouched();
      return;
    }
    this.isLoginInProgress.set(true);
    this.errorMessage.set(null);

    try {
      const { email, password, rememberMe } = this.authForm.value;

      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(this.auth, persistenceType);
      await signInWithEmailAndPassword(this.auth, email!, password!);
      this.router.navigate(['/users']);
    } catch (_error: unknown) {
      this.errorMessage.set('Authentication failed! Invalid user credentials.');
    } finally {
      this.isLoginInProgress.set(false);
    }
  }

  forgotPassword(): void {
    this.snackBar.open('Method not implemented.', '✖');
  }
}

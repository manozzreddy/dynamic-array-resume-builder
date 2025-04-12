import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseComponent } from '../../_core/base/base-component';

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
export class LoginComponent extends BaseComponent {
  private readonly auth = inject(Auth);

  async signInWithGoogle() {
    try {
      this.loading.set(true);

      await this.userService.signInWithGoogle();
      
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.snackBar.open(`${error}`, '✕', {
        duration: 3000
      });
    } finally {
      this.loading.set(false);
    }
  }
}

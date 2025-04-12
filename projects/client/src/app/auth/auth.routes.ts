import { Routes } from '@angular/router';

// '/auth'
export const AUTH_ROUTES: Routes = [
    {
        path: '',
        title: 'Auth',
        loadComponent: () => import('./auth.component').then((m) => m.AuthComponent),
        children: [
            {
                path: 'forgot-password',
                title: 'Forgot Password',
                loadComponent: () => import('./forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
            },
            {
                path: 'reset-password',
                title: 'Reset Password',
                loadComponent: () => import('./reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
            },
            {
                path: '',
                pathMatch: 'full',
                title: 'Login',
                loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
            },            
            { path: '**', redirectTo: '' }
        ]
    },
];
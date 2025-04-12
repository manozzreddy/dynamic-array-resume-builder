import { Routes } from '@angular/router';
import { AuthGuard as FireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["auth"]);

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Auth',
    loadChildren: () =>
      import('./auth/auth.routes')
        .then(m => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '',
    canActivate: [FireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'resume-editor',
        canActivate: [FireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import('./resume-editor/resume-editor.component').then((c) => c.ResumeEditorComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

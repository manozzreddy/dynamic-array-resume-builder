import { Routes } from '@angular/router';

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
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },
  {
    path: 'resume-editor',
    loadComponent: () =>
      import('./resume-editor/resume-editor.component').then((c) => c.ResumeEditorComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

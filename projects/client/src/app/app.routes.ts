import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path : 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },  
  {
    path : '',
    loadComponent: () =>
      import('./resume-editor/resume-editor.component').then((c) => c.ResumeEditorComponent),
  },   
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path : '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },  
];

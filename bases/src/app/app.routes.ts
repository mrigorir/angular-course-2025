import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/counter/counter.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

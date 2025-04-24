import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero/hero.component'),
  },
  {
    path: 'counter',
    loadComponent: () => import('./pages/counter/counter.component'),
  },
  {
    path: '**',
    redirectTo: 'hero',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic/basic.component'),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipe',
    loadComponent: () => import('./pages/numbers/numbers.component'),
  },
  {
    path: 'uncommonnn',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('./pages/uncommon/uncommon.component'),
  },
  {
    path: 'custom',
    title: 'Pipes Personalizables',
    loadComponent: () => import('./pages/custom/custom.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];

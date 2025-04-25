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
    path: 'dragon-ball',
    loadComponent: () => import('./pages/dragon-ball/dragon-ball.component'),
  },
  {
    path: 'dragon-ball-super',
    loadComponent: () => import('./pages/dragon-ball-super/dragon-ball-super.component'),
  },
  {
    path: '**',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
];

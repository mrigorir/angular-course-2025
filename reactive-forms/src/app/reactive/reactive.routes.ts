import { Routes } from '@angular/router';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        loadComponent: () => import('./pages/basic/basic.component'),
      },
      {
        path: 'dynamic',
        title: 'Dinámicos',
        loadComponent: () => import('./pages/dynamic/dynamic.component'),
      },
      {
        path: 'switches',
        title: 'Switches',
        loadComponent: () => import('./pages/switches/switches.component'),
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];

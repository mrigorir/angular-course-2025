import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/register/register.component'),
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];

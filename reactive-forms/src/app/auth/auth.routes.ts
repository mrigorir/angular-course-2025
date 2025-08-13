import { Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];

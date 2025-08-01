import { Routes } from '@angular/router';

export const countryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/by-capital/by-capital.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default countryRoutes;

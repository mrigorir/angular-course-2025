import { Routes } from '@angular/router';
import ByCapitalComponent from './pages/by-capital/by-capital.component';

export const countryRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/country-layout/country-layout.component'),
    children: [
      {
        path: 'by-capital',
        component: ByCapitalComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard/dashboard.component'),

    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending.component'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search.component'),
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gifs-history/gifs-history.component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

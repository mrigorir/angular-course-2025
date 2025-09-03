import { Routes } from '@angular/router';

import { FullscreenMapComponent } from './pages/fullscreen-map/fullscreen-map.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { HousesComponent } from './pages/houses/houses.component';

export const routes: Routes = [
  {
    path: 'maps',
    component: FullscreenMapComponent,
    title: 'Mapa',
  },
  {
    path: 'markers',
    component: MarkersComponent,
    title: 'Marcadores',
  },
  {
    path: 'houses',
    component: HousesComponent,
    title: 'Propiedades disponibles',
  },
  {
    path: '**',
    redirectTo: 'Mapa',
  },
];

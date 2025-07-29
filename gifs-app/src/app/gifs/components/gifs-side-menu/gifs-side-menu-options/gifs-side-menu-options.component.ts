import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject, OnInit, signal } from '@angular/core';

import { MenuOptions } from '../interfaces/menu-options';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
})
export default class GifsSideMenuOptionsComponent {
  gifService = inject(GifsService);

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar Gifs',
      route: '/dashboard/search',
    },
  ];

}

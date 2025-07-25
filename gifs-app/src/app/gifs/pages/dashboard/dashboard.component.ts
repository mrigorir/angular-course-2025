import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import GifsSideMenuComponent from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  selector: 'dashboard',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}

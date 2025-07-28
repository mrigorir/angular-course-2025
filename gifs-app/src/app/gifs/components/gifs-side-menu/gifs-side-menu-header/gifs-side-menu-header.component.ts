import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@environments/environment';


@Component({
  selector: 'gifs-side-menu-header',
  imports: [CommonModule],
  templateUrl: './gifs-side-menu-header.component.html',
})
export default class GifsSideMenuHeaderComponent {
  public envs = signal(environment);
}

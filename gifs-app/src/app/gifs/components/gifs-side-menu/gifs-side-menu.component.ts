import { ChangeDetectionStrategy, Component } from '@angular/core';

import GifsSideMenuOptionsComponent from './gifs-side-menu-options/gifs-side-menu-options.component';
import GifsSideMenuHeaderComponent from './gifs-side-menu-header/gifs-side-menu-header.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [ GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent,],
  templateUrl: './gifs-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifsSideMenuComponent { }

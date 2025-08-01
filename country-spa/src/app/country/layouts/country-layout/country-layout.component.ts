import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenuComponent, CommonModule],
  templateUrl: './country-layout.component.html',
})
export default class CountryLayoutComponent {

}

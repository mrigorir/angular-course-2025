import { Component } from '@angular/core';

import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { NavSectionComponent } from '../../components/nav-section/nav-section.component';

@Component({
  selector: 'home',
  imports: [HeaderSectionComponent, NavSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent { }

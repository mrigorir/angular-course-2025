import { Component } from '@angular/core';

import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { NavSectionComponent } from '../../components/nav-section/nav-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'home',
  imports: [FooterComponent, HeaderSectionComponent, NavSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent { }

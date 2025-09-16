import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'store-front-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './store-front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoreFrontLayoutComponent implements OnInit {
  ngOnInit(): void {}
}

import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  menuItems = routes.filter((item) => item.path !== '**' );
  ngOnInit(): void {
    console.log('menus: ', this.menuItems);
  }
}

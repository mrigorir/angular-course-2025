import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  routes = routes.map(({ title, path }) => ({
    title: title ?? '',
    path: path ?? '',
  }));
}

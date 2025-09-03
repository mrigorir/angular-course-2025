import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import { routes } from '../../../../app.routes';
import { filter, map } from 'rxjs';

@Component({
  selector: 'navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  router = inject(Router);

  routes = routes
    .map(({ path, title }) => ({
      path,
      title: `${title ?? 'Mapas en Angular'}`,
    }))
    .filter((route) => route.path !== '**');

  pageTitle = toSignal(this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.url.slice(1))
  ));
}

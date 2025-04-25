import { ChangeDetectionStrategy, Component, signal, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarItem, navbarItems } from './interfaces/navbar.interface';


@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  navbarItems = signal<NavbarItem[]>(navbarItems);

  ngOnInit(): void { }

  hola() {
    console.info('HOLA')
  }

}

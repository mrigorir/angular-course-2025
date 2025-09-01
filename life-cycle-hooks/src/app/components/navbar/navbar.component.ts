import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    .active {
      color: #341162;
      font-weight: bold;
    }


  `,
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void { }

}

import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {



  ngOnInit(): void { }

}

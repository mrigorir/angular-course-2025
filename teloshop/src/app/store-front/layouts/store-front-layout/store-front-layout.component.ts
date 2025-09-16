import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'store-front-layout',
  imports: [],
  templateUrl: './store-front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreFrontLayoutComponent implements OnInit {
  ngOnInit(): void {}
}

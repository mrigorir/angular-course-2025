import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

import { ProductCardComponent } from '@/products/components/product-card/product-card.component';


@Component({
  selector: 'home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {

  ngOnInit(): void { }

}

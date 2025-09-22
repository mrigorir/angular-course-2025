import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  productsService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({}),
    stream: () => {
      return this.productsService.getProducts();
    },
  });

  ngOnInit(): void {}
}

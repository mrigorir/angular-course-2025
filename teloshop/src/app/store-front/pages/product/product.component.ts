import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ProductsService } from '@/products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { ProductCarouselComponent } from "@/products/components/product-carousel/product-carousel.component";

@Component({
  selector: 'product',
  imports: [ProductCarouselComponent],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  idSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    params: () => ({}),
    stream: () => {
      return this.productsService.getProductByIdSlug(this.idSlug);
    },
  });

  ngOnInit(): void {}
}

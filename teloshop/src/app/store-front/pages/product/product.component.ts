import { ProductsService } from '@/products/services/products.service';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  imports: [],
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

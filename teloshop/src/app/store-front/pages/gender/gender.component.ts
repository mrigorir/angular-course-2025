import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { ProductsService } from '@/products/services/products.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'gender',
  imports: [ProductCardComponent],
  templateUrl: './gender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GenderComponent {
  route = inject(ActivatedRoute);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  productsService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({ gender: this.gender() }),
    stream: () => {
      return this.productsService.getProducts({ gender: this.gender() });
    },
  });

  noWayToRun(value: string) {
    console.log('/*******/');
    console.info('Value: ', value);
     console.log('/*******/');
    console.error('RUUUUUN');
    console.log('/*******/');
  }
}


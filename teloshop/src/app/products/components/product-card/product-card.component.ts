import { Product } from '@/products/interfaces/products.intertface';
import { Component, input, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

import { ProductImagePipe } from '@/products/pipes/product-image.pipe';


@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  ngOnInit(): void {}
}

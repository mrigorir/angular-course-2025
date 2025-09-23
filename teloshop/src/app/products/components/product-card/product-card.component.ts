import { Product } from '@/products/interfaces/products.intertface';
import { Component, input, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  ngOnInit(): void {}
}

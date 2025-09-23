import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  private readonly BASE_URL = `${environment.url}files/product`;
  private readonly FALLBACK_IMAGE = './assets/images/no-image.jpg';

  transform(value: string | string[]): string {
    const image = this.extractImage(value);

    return image ? `${this.BASE_URL}/${image}` : this.FALLBACK_IMAGE;
  }

  private extractImage(value: string | string[]): string | null {
    if (typeof value === 'string') return value;
    
    return value[1] || null;
  }
}

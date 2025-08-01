import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { FooterComponent } from './shared/components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'country-spa';
}

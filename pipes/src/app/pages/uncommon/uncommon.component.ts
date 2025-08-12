import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'uncommon',
  imports: [CardComponent],
  templateUrl: './uncommon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonComponent { }

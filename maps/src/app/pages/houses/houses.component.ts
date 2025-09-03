import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'houses',
  imports: [],
  templateUrl: './houses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousesComponent implements OnInit {


  ngOnInit(): void {}
}

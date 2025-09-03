import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'markers',
  imports: [],
  templateUrl: './markers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersComponent implements OnInit {


  ngOnInit(): void {}
}

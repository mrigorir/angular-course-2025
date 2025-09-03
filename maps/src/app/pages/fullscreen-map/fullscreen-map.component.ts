import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'fullscreen-map',
  imports: [],
  templateUrl: './fullscreen-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenMapComponent implements OnInit {


  ngOnInit(): void {}
}

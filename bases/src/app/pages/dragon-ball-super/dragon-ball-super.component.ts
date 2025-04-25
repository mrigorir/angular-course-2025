import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'dragon-ball-super',
  imports: [],
  templateUrl: './dragon-ball-super.component.html',
  styleUrl: './dragon-ball-super.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuperComponent implements OnInit {

  ngOnInit(): void { }

}

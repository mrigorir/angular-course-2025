import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DragonBallComponent implements OnInit {

  ngOnInit(): void { }

}

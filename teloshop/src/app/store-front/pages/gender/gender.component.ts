import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'gender',
  imports: [],
  templateUrl: './gender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GenderComponent implements OnInit {

  ngOnInit(): void { }

}

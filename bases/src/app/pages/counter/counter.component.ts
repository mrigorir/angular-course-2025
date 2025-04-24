import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterComponent implements OnInit {
  counter = signal<number>(15);
  ngOnInit(): void {}

  increaseBy(value: number) {
    if (this.counter() <= 0) {
      this.resetCounter();
      return;
    }
    this.counter.update((current) => current + value);
  }

  resetCounter() {
    this.counter.set(10);
  }
}

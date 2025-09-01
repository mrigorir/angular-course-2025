import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges,
  type OnInit,
} from '@angular/core';

const log = (color: string, ...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    `color: ${color}`
  );
};

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked
{
  ngOnInit(): void {
    log(
      'red',
      'ngOnInit',
      '	Runs once after Angular has initialized all the components inputs.'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    log('blue','ngOnChanges', 'Runs every time the components inputs have changed.');
  }

  ngDoCheck(): void {
    log('green', 'ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  ngAfterContentChecked(): void {
    log(
      'lightblue',
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }

  ngAfterContentInit(): void {
    log(
      '#bada55',
      'ngAfterContentInit',
      'Runs once after the components content has been initialized'
    );
  }

  ngAfterViewChecked(): void {
    log(
      'cyan',
      'ngAfterViewChecked',
      'Runs every time the components view has been checked for changes.'
    );
  }

  ngAfterViewInit(): void {
    log(
      'tomato',
      'ngAfterViewInit',
      'Runs once after the components view has been initialized.'
    );
  }
}

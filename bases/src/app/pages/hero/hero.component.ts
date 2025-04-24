import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroComponent implements OnInit {
  name = signal<string>('Ironman');
  age = signal<number>(45);

  capitalizedHeroName = computed(() => this.name().toUpperCase());

  ngOnInit(): void {}

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}

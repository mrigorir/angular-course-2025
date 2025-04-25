import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnInit,
} from '@angular/core';

import { Character, characters } from './interfaces/character.interface';

@Component({
  selector: 'dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DragonBallComponent implements OnInit {
  characters = signal<Character[]>(characters);
  name = signal<string>('Ingresa un nombre');
  power = signal<number>(0);

  ngOnInit(): void {}

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters.length + 1,
      power: this.power(),
      name: this.name(),
    };
    // this.characters().push(newCharacter); --> No recomendado
    this.characters.update((list) => [...list, newCharacter]); // recomendado
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

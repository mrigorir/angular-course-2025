import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  type OnInit,
} from '@angular/core';

import { Character } from '../../../interfaces/characters.interfaces';

@Component({
  selector: 'dragon-ball-add-character',
  imports: [],
  templateUrl: './dragon-ball-add-character.component.html',
  styleUrl: './dragon-ball-add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallAddCharacterComponent implements OnInit {
  characters = input.required<Character[]>();

  onAddNewCharacter = output<Character>();

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

    this.onAddNewCharacter.emit(newCharacter);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

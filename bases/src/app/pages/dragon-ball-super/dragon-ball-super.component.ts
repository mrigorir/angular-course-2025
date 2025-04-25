import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  type OnInit,
} from '@angular/core';

import { DragonBallService } from '../../services/dragon-ball.service';

import { Character } from '../../interfaces/characters.interfaces';
import { characters } from './interfaces/characters.interface';

import { DragonBallAddCharacterComponent } from '../../components/dragon-ball/dragon-ball-add-character/dragon-ball-add-character.component';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';

@Component({
  selector: 'dragon-ball-super',
  imports: [CharacterListComponent, DragonBallAddCharacterComponent],
  templateUrl: './dragon-ball-super.component.html',
  styleUrl: './dragon-ball-super.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DragonBallSuperComponent implements OnInit {
  private dragonBallService = inject(DragonBallService);

  characters = signal<Character[]>(characters);

  ngOnInit(): void {}


  addNewCharacter(newCharacter: Character) {
    // this.characters().push(newCharacter); --> No recomendado
    this.characters.update((list) => [...list, newCharacter]); // recomendado
  }
}

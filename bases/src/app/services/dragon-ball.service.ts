import { Injectable, signal } from '@angular/core';

import { characters } from '../pages/dragon-ball/interfaces/character.interface';
import { Character } from '../interfaces/characters.interfaces';

const loadFromLocalStrage = ():Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}


@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  characters = signal<Character[]>(characters);

  addNewCharacter(newCharacter: Character) {
    // this.characters().push(newCharacter); --> No recomendado
    this.characters.update((list) => [...list, newCharacter]); // recomendado
  }

}

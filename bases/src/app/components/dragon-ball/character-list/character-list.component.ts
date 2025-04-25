import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';

import { characters } from '../../../pages/dragon-ball-super/interfaces/characters.interface';
import { Character } from '../../../interfaces/characters.interfaces';

@Component({
  selector: 'dragon-ball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent implements OnInit {
  characters = input.required<Character[]>()
  listName = input.required<string>();
  ngOnInit(): void { }

}

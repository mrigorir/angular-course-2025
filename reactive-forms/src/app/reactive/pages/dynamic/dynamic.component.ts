import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'dynamic',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DynamicComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  dynamicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.minLength(2)
    ),
  });

  get favoriteGames() {
    return this.dynamicForm.get('favoriteGames') as FormArray;
  }

  newFavorite = new FormControl('', Validators.required);

  onAddNewFavorites() {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }

    this.dynamicForm.reset();
  }
}

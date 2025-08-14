import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
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
      Validators.minLength(3)
    ),
  });

  get favoriteGames() {
    return this.dynamicForm.get('favoriteGames') as FormArray;
  }

}

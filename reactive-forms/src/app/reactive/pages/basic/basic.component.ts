import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'basic',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  basicForm: FormGroup = this.fb.group({
    product: [0, [Validators.required, Validators.minLength(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
    price: ['', [Validators.required, Validators.min(3)]],
  });

  get basicFormValues() {
    return this.basicForm.controls;
  }

  onSave() {
    if(this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }

    this.basicForm.reset();
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'basic',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicComponent {
  private fb = inject(FormBuilder);

  basicForm: FormGroup = this.fb.group({
    price: ['', [Validators.required, Validators.minLength(3)]],
    product: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  get basicFormValues() {
    return this.basicForm.controls;
  }
}

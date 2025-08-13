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
    product: [0, [Validators.required, Validators.minLength(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
    price: ['', [Validators.required, Validators.min(3)]],
  });

  get basicFormValues() {
    return this.basicForm.controls;
  }

  isValidField(fieldName: string): boolean | null {
    return (
      !!this.basicFormValues[fieldName].errors &&
      this.basicFormValues[fieldName].touched
    );
  }

  getFieldError(fieldName: string): string | null {
    if (!this.basicFormValues[fieldName]) return null;

    const errors = this.basicFormValues[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min} caracteres.`;
      }
    }

    return null;
  }

  onSave() {
    if(this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }

    this.basicForm.reset();
  }
}

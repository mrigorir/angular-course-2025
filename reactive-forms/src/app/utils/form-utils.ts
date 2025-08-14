import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static isValidField(fieldName: string, form: FormGroup): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(fieldName: string, form: FormGroup): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return this.getTextErrors(errors);
  }

  static isValidFieldArray(index: number, formArray: FormArray) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFieldArrayError(
    index: number,
    formArray: FormArray
  ): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextErrors(errors);
  }

  static getTextErrors(errors: ValidationErrors) {
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
}

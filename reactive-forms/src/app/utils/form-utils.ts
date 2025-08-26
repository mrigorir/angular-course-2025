import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

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

        case 'maxlength':
          return `Maximo de ${errors['maxlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min} caracteres.`;

        case 'email':
          return 'Fromato invalido';

        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'el correo electrónico no es permitido';
          }

          if (errors['pattern'].requiredPattern === FormUtils.namePattern) {
            return 'Escriba formato tipo nombre y apellido';
          }

          return 'Error de expresión regular';
      }
    }

    return null;
  }
}

import { JsonPipe } from '@angular/common';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(FormUtils.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    username: ['', [Validators.required, Validators.pattern(FormUtils.notOnlySpacesPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  get registerFormValues() {
    return this.registerForm.controls;
  }

  comparePasswords():boolean {
    if (
      this.registerFormValues['password'] !==
      this.registerFormValues['confirmPassword']
    )
      return false;

    return true;
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid || !this.comparePasswords()) return;

    console.log(this.registerForm.valid);
  }
}

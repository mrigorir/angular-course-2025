import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'switches',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchesComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  swtichesForm = this.fb.group({
    gender: ['', Validators.required],
    wantNotifications: [false],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  get swtichesFormValues() {
    return this.swtichesForm.controls;
  }

  onSubmit() {
    this.swtichesForm.markAllAsTouched();

    if (this.swtichesForm.invalid) return;
    
    console.log(this.swtichesForm.valid);
  }
 }

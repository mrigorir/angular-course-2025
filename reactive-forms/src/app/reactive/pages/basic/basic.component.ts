import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    price: [''],
    product: [0],
    inStorage: [0]
  });

  get basicFormValues() {
    return this.basicForm.controls;
  }
}

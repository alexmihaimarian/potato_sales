import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NewProductBase } from '../new-product-base';

@Component({
  selector: 'app-question',
  templateUrl: './new-product-form-fields.component.html'
})
export class NewProductFormFieldsComponent {
  @Input() field!: NewProductBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}

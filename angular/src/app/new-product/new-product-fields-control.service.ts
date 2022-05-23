import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NewProductBase } from './new-product-base';

@Injectable()
export class NewProductFieldsControlService {
  constructor() { }

  toFormGroup(fields: NewProductBase<string>[] ) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }
}




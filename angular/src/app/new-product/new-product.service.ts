import { Injectable } from '@angular/core';

import { NewProductBase } from './new-product-base';
import { TextBoxField } from './new-product-text-box';
import { of } from 'rxjs';

@Injectable()
export class NewProductService {

  getFields() {
    const fields: NewProductBase<string>[] = [

      new TextBoxField({
        key: 'productName',
        label: 'Product name',
        type: 'text',
        dimension: 50,
        value: '',
        required: true,
        order: 1
      }),

      new TextBoxField({
        key: 'productId',
        label: 'Product ID',
        type: 'number',
        dimension: 13,
        pattern: '[0-9]{0,13}',
        value: '',
        required: true,
        order: 2
      }),

      new TextBoxField({
        key: 'productManager',
        label: 'Product manager',
        type: 'text',
        dimension: 30,
        value: '',
        required: false,
        order: 3
      }),

      new TextBoxField({
        key: 'salesStartDate',
        label: 'Sales start date',
        type: 'date',
        dimension: 10,
        required: true,
        order: 4
      })
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {NewProductBase} from "../new-product-base";
import { NewProductService } from '../new-product.service';
import {NewProductFieldsControlService} from "../new-product-fields-control.service";

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['../new-product.component.scss'],
  providers:  [NewProductFieldsControlService, NewProductService]
})
export class NewProductFormComponent implements OnInit {
  @Input() fields: NewProductBase<any>[] | null = [];
  form!: FormGroup;
  payLoad = '';


  constructor(private qcs: NewProductFieldsControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields as NewProductBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  clear() {
    this.payLoad = '';
    this.form.reset();
  }

}

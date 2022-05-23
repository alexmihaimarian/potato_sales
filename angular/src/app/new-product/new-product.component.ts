import {Component, OnInit} from '@angular/core';

import { NewProductService } from './new-product.service';
import { NewProductBase } from './new-product-base';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers:  [NewProductService]
})
export class NewProductComponent implements OnInit {
  fields$: Observable<NewProductBase<any>[]>;

  constructor(service: NewProductService) {
    this.fields$ = service.getFields();
  }

  ngOnInit(): void {
  }

}

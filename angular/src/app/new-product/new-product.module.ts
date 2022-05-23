import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { NewProductFormComponent } from "./form/new-product-form.component";
import { NewProductFormFieldsComponent } from './form-fields/new-product-form-fields.component'

import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    NewProductComponent,
    NewProductFormComponent,
    NewProductFormFieldsComponent
  ],

  imports: [
    CommonModule,
    NewProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    CardModule
  ],

  bootstrap: [NewProductComponent]
})
export class NewProductModule { }

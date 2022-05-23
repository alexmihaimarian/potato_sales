import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';

import { CardModule } from 'primeng/card';
import { TableModule } from "primeng/table";


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    CardModule,
    TableModule
  ]
})
export class SalesModule { }

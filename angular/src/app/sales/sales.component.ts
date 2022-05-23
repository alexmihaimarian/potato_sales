import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit {
  items: any;
  columns: any;
  constructor() { }

  ngOnInit(): void {
    this.columns = [
      {header: "Product ID", field:"productID"},
      {header: "Product name", field: "productName"},
      {header: "Sales", "subHeaders": [
          {header: "2019Q1", field:"salesQ1"},
          {header: "2019Q2", field:"salesQ2"},
          {header: "2019Q3", field:"salesQ3"},
          {header: "2019Q4", field:"salesQ4"}
        ]},
      {header: "Total sales"}
    ];
      this.items = [
        {
          productID: "5068764589210",
          productName: "Yukon Gold Potatos",
          salesQ1: 120005,
          salesQ2: 184557,
          salesQ3: 150624,
          salesQ4: 109383,
        },
        {
          productID: "5746890234585",
          productName: "Butte Russet Potatos ",
          salesQ1: 24005,
          salesQ2: 284500,
          salesQ3: 290657,
          salesQ4: 350022
        },
        {
          productID: "5449873501259",
          productName: "Red Cloud Potatos",
          salesQ1: 97800,
          salesQ2: 85300,
          salesQ3: 87458,
          salesQ4: 100000
        },
        {
          productID: "5639814580025",
          productName: "Charlotte Potatos",
          salesQ1: 97800,
          salesQ2: 85300,
          salesQ3: 87458,
          salesQ4: 100000
        }
      ]
  }

  sumSales(values: any) {
    const arrayOfValues = [];
    this.columns.map(item => {
      if (item.subHeaders) {
        item.subHeaders.map((subheader, index) => {
          arrayOfValues.push(values[subheader.field]);
        })
      }
    })

    return arrayOfValues.reduce((partialSum, a) => partialSum + a, 0);

  }

}

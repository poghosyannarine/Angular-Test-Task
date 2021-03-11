import {Component, Input, OnInit} from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  surname: string;
  email: string;
  customerType: string;
  allowed: boolean;
  age: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns;
  @Input() callFrom;
  public totalPrice = 0;
  public user: User;
  constructor() {
  }

  ngOnInit(): void {

    if (this.dataSource && this.callFrom && this.callFrom ===  'chosen-articles') {
      this.getUserPersonalData();
      this.calculateTotalPrice(this.dataSource);
    }
  }

  public changeArticleQuantity(element: any, index: any, num) {
    if (!element.quantity && num < 0) {
      return;
    } else {
      const data = JSON.parse(localStorage.getItem('data'));
      element.quantity += num;
      element.total += num * element.unit_price;
      element.total = +element.total.toFixed(2);
      if (!data) {

        localStorage.setItem('data', JSON.stringify([element]));
      } else {
        const idx = data.findIndex(item => item.id === element.id);
        if (idx >= 0) {
          data.splice(idx, 1, element);
        } else {
          data.push(element);
        }
        localStorage.setItem('data', JSON.stringify(data));
      }
    }

  }

  private getUserPersonalData() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private calculateTotalPrice(data) {
    this.totalPrice = data.reduce((aggr, item) => aggr + item.total, 0).toFixed(2);
  }
}

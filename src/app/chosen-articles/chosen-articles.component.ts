import {Component, OnInit} from '@angular/core';

export interface ChosenArticles {
  id: number;
  article_name: string;
  unit_price: number;
  date: string;
  quantity: number;
  total_price: number;
}
@Component({
  selector: 'app-chosen-articles',
  templateUrl: './chosen-articles.component.html',
  styleUrls: ['./chosen-articles.component.css']
})

export class ChosenArticlesComponent implements OnInit {

  public dataSource: ChosenArticles[];

  public displayedColumns: string[] = ['article_name', 'unit_price', 'total'];

  constructor() { }

  ngOnInit(): void {

   const data = localStorage.getItem('data');
   if (data) {
     this.dataSource = JSON.parse(data);
   }
  }


}

import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ArticlesService {
  private articles = [
    {
      id: 1,
      article_name: 'PCR - LaborTest 1',
      unit_price: 19.99,
      date: 'Tue Mar 30 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 2,
      article_name: 'PCR - LaborTest 2',
      unit_price: 29.99,
      date: 'Tue Mar 30 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 3,
      article_name: 'PCR - LaborTest 3',
      unit_price: 39.99,
      date:  'Tue Mar 30 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 4,
      article_name: 'PCR - LaborTest 4',
      unit_price: 49.99,
      date:  'Wed Apr 07 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 5,
      article_name: 'PCR - LaborTest 5',
      unit_price: 59.99,
      date:  'Wed Apr 07 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 6,
      article_name: 'PCR - LaborTest 6',
      unit_price: 69.99,
      date:  'Wed Apr 07 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    },
    {
      id: 7,
      article_name: 'PCR - LaborTest 7',
      unit_price: 79.99,
      date: 'Wed Apr 07 2021 00:00:00 GMT+0400 (Armenia Standard Time)',
      quantity: 0
    }
  ];
  public date$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
  }

  public getArticles() {
    return of(this.articles);
  }
}

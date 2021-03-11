import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ArticlesService {

  public date$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }

  public getArticles() {
    return this.http.get('http://localhost:3000/articles');
  }
}

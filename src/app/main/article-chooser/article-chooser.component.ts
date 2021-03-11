import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticlesService} from '../../shared/articles.service';
import {Subject} from 'rxjs';
import * as moment from 'moment';
import {takeUntil} from 'rxjs/operators';

export interface Article {
  id: number;
  article_name: string;
  unit_price: number;
  date: string;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-article-chooser',
  templateUrl: './article-chooser.component.html',
  styleUrls: ['./article-chooser.component.css']
})
export class ArticleChooserComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<any> = new Subject();
  private data: any;
  public dataSource: Article[];

  public displayedColumns: string[] = ['article_name', 'unit_price', 'quantity', 'total'];

  constructor(
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticles() {
    this.articlesService.getArticles().subscribe(articles => {
      this.data = articles;
      this.followDateChanges();
    });
  }

  private followDateChanges() {
    this.articlesService.date$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(date => {
      if (date) {
        this.dataSource = this.data.filter(item => moment(date).isSame(new Date( item.date)));
      }
    });
  }

}

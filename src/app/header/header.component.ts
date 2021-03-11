import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../shared/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  public resetChosenArticles() {
    this.articlesService.date$.next(null);
    localStorage.clear();
  }
}

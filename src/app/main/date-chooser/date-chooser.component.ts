import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ArticlesService} from '../../shared/articles.service';

@Component({
  selector: 'app-date-chooser',
  templateUrl: './date-chooser.component.html',
  styleUrls: ['./date-chooser.component.css']
})
export class DateChooserComponent implements OnInit {
  date: FormControl = new FormControl('');
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {

  }

  public dateChange($event: MatDatepickerInputEvent<any, any | null>) {
    this.articlesService.date$.next($event.value);
  }


}

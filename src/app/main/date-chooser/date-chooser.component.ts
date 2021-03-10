import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ArticlesService} from '../../shared/articles.service';

@Component({
  selector: 'app-date-chooser',
  templateUrl: './date-chooser.component.html',
  styleUrls: ['./date-chooser.component.css']
})
export class DateChooserComponent implements OnInit {
  @ViewChild('myPicker') myPicker;
  date: FormControl = new FormControl('10/12/2020');
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {

  }

  public dateChange($event: MatDatepickerInputEvent<any, any | null>) {
    this.articlesService.date$.next($event.value);
    console.log(typeof $event.value, $event.value);
  }


}

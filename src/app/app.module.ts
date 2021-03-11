import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {HeaderComponent} from './header/header.component';
import {DateChooserComponent} from './main/date-chooser/date-chooser.component';
import {ArticleChooserComponent} from './main/article-chooser/article-chooser.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ChosenArticlesComponent} from './chosen-articles/chosen-articles.component';
import {MainComponent} from './main/main.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { PriceViewPipe } from './shared/pipes/price-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateChooserComponent,
    ArticleChooserComponent,
    PersonalDetailsComponent,
    ChosenArticlesComponent,
    MainComponent,
    DataTableComponent,
    PriceViewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

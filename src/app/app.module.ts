import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { DateChooserComponent } from './main/date-chooser/date-chooser.component';
import { ArticleChooserComponent } from './main/article-chooser/article-chooser.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ChosenArticlesComponent } from './chosen-articles/chosen-articles.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateChooserComponent,
    ArticleChooserComponent,
    PersonalDetailsComponent,
    ChosenArticlesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

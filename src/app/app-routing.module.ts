import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {ChosenArticlesComponent} from './chosen-articles/chosen-articles.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'personal', component: PersonalDetailsComponent},
  {path: 'chosen-articles', component: ChosenArticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {CategoriesComponent} from "../categories/categories.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoriesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

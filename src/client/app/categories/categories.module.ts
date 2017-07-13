import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from "./categories.component";
import {CategoriesRoutingModule} from "./categories-routing.module";

@NgModule({
  imports: [CategoriesRoutingModule, CommonModule],
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent],
})
export class CategoriesModule { }

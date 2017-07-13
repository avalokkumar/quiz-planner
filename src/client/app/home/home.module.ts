import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import {LoginComponent} from "../login/login.component";
import {FooterComponent} from "../shared/footer/footer.component";

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, LoginComponent, FooterComponent],
  exports: [HomeComponent, LoginComponent, FooterComponent],
  providers: [NameListService]
})
export class HomeModule { }

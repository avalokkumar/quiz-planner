import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { FooterComponent } from './footer/footer.component';
import {NavComponent} from "./nav/nav.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent, SpinnerComponent, ToastComponent, NavComponent, FooterComponent]
})
export class CoreModule { }

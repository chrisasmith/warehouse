import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SidebarComponent} from './sidebar.component';
import {LogoComponent} from './elements/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
      SidebarComponent,
      LogoComponent
  ],
  exports: [
    SidebarComponent,
    LogoComponent
  ],
})
export class SidebarModule { }

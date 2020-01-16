import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrawerComponent} from './drawer.component';
import {FormsModule} from '@angular/forms';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {DirectivesModule} from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      PerfectScrollbarModule,
      RoundProgressModule,
      DirectivesModule
  ],
  declarations: [
      DrawerComponent
  ],
  exports: [
      DrawerComponent
  ],
})
export class DrawerModule { }

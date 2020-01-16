import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchedulerComponent} from './scheduler.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      NgSelectModule
  ],
  declarations: [
      SchedulerComponent
  ],
  exports: [
      SchedulerComponent
  ],
})
export class SchedulerModule { }

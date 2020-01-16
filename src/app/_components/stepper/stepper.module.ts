import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatStepperModule} from '@angular/material';
import {StepperComponent} from './stepper.component';
import {PageTitleComponent} from '../../vendors/page-title/page-title.component';
import {RouterModule} from '@angular/router';
import {VendorsModule} from '../../vendors/vendors.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    VendorsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [
    StepperComponent
  ],
  exports: [

  ]
})
export class StepperModule { }

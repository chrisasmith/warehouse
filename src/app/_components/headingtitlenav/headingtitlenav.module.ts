import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeadingtitlenavComponent} from './headingtitlenav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
      HeadingtitlenavComponent
  ],
  exports: [
    HeadingtitlenavComponent
  ],
})
export class HeadingtitlenavModule { }

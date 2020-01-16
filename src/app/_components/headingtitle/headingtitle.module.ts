import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeadingtitleComponent} from './headingtitle.component';
import {HeaderModule} from '../../vendors/header/header.module';
import {HeadingtitlenavModule} from '../headingtitlenav/headingtitlenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
      HeadingtitlenavModule
  ],
  declarations: [
    HeadingtitleComponent
  ],
  exports: [
    HeadingtitleComponent
  ]
})
export class HeadingtitleModule { }

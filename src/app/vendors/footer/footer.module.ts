import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer.component';
import {FooterMenuComponent} from './elements/footer-menu/footer-menu.component';
import {FooterDotsComponent} from './elements/footer-dots/footer-dots.component';
import {NgbPopoverModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {TrendModule} from 'ngx-trend';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      RouterModule,
      NgbPopoverModule,
      PerfectScrollbarModule,
      NgbPopoverModule,
      RoundProgressModule,
      TrendModule,
      AngularFontAwesomeModule,
      NgbTabsetModule
  ],
  declarations: [
      FooterComponent,
      FooterMenuComponent,
      FooterDotsComponent
  ],
  exports: [
    FooterComponent,
    FooterMenuComponent,
    FooterDotsComponent
  ],
})
export class FooterModule { }

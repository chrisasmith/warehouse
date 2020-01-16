import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigurationsComponent} from '../_im/configurations/configurations.component';
import {ConfigurationCreateSummaryComponent} from '../_im/configuration-create-summary/configuration-create-summary.component';
import {ConfigurationCreateComponent} from '../_im/configuration-create/configuration-create.component';
import {ConfigurationSummaryComponent} from '../_im/configuration-summary/configuration-summary.component';
import {FormsModule} from '@angular/forms';
import {HeadingtitleModule} from '../_components/headingtitle/headingtitle.module';
import {HeadingtitlenavModule} from '../_components/headingtitlenav/headingtitlenav.module';
import {ComponentsModule} from '../_components/components.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    HeadingtitleModule,
    HeadingtitlenavModule,
    ComponentsModule
  ],
  declarations: [
    ConfigurationsComponent,
    ConfigurationCreateComponent,
    ConfigurationCreateSummaryComponent,
    ConfigurationSummaryComponent
  ],
  exports: [
    ConfigurationsComponent,
    ConfigurationCreateComponent,
    ConfigurationCreateSummaryComponent,
    ConfigurationSummaryComponent
  ]
})
export class ConfigurationsModule { }

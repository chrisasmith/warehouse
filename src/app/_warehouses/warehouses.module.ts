import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WarehouseSummaryComponent} from './warehouse-summary/warehouse-summary.component';
import {WarehouseCreateComponent} from './warehouse-create/warehouse-create.component';
import {ClustersComponent} from './clusters/clusters.component';
import {FormsModule} from '@angular/forms';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {HeadingtitleModule} from '../_components/headingtitle/headingtitle.module';
import {AppRoutingModule} from '../app-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {DirectivesModule} from '../directives/directives.module';
import {DrawerModule} from '../_components/drawer/drawer.module';
import {SchedulerModule} from '../_components/scheduler/scheduler.module';
import {WarehouseDetailsComponent} from './warehouse-details/warehouse-details.component';
import {HeadingtitlenavModule} from '../_components/headingtitlenav/headingtitlenav.module';
import {ComponentsModule} from '../_components/components.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        NgbDropdownModule,
        RoundProgressModule,
        HeadingtitleModule,
        DirectivesModule,
        DrawerModule,
        SchedulerModule,
        HeadingtitlenavModule,
        ComponentsModule,
    ],
    declarations: [
        WarehouseSummaryComponent,
        WarehouseCreateComponent,
        ClustersComponent,
        WarehouseDetailsComponent
    ],
    exports: [
        WarehouseSummaryComponent,
        WarehouseCreateComponent,
        ClustersComponent
    ]
})
export class WarehousesModule {
}

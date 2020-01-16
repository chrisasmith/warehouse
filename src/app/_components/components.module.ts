import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {JobschedulerComponent} from './jobscheduler/jobscheduler.component';
import {HeadingtitleModule} from './headingtitle/headingtitle.module';
import {HeadingtitlenavModule} from './headingtitlenav/headingtitlenav.module';
import {FooterrefreshComponent} from './footerrefresh/footerrefresh.component';
import {FilesManagerComponent} from './files-manager/files-manager.component';
import {DjaruploaderComponent} from './djaruploader/djaruploader.component';
import {DataGridComponent} from './data-grid/data-grid.component';
import {StepperComponent} from './stepper/stepper.component';
import {FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material';
import {PageTitleComponent} from '../vendors/page-title/page-title.component';
import {StepperModule} from './stepper/stepper.module';
import {RouterModule} from '@angular/router';
import {CustomConfigModalComponent} from '../_modals/custom-config-modal/custom-config-modal.component';
import {SalesforceModalComponent} from '../_modals/salesforce-modal/salesforce-modal.component';
import {PermissionsModalComponent} from '../_modals/permissions-modal/permissions-modal.component';
import {SchedulingModalComponent} from '../_modals/scheduling-modal/scheduling-modal.component';
import {FileUploadComponent} from '../_modals/file-upload/file-upload.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {DrawerComponent} from './drawer/drawer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbDropdownModule,
        HeadingtitleModule,
        HeadingtitlenavModule,
        StepperModule
    ],
    declarations: [
        SidebarComponent,
        PageNotFoundComponent,
        JobschedulerComponent,
        FooterrefreshComponent,
        FilesManagerComponent,
        DjaruploaderComponent,
        DataGridComponent,
        CustomConfigModalComponent,
        SalesforceModalComponent,
        PermissionsModalComponent,
        SchedulingModalComponent,
        FileUploadComponent
    ],
    exports: [
        SidebarComponent,
        PageNotFoundComponent,
        JobschedulerComponent,
        FooterrefreshComponent,
        FilesManagerComponent,
        DjaruploaderComponent,
        DataGridComponent,
        CustomConfigModalComponent,
        SalesforceModalComponent,
        PermissionsModalComponent,
        SchedulingModalComponent,
        FileUploadComponent
    ],
})
export class ComponentsModule {
}

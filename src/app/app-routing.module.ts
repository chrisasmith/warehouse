
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActianForgotPasswordComponent} from './_auth/actian-forgot-password/actian-forgot-password.component';
import {ConfirmEmailComponent} from './_auth/confirm-email/confirm-email.component';
import {WarehouseSummaryComponent} from './_warehouses/warehouse-summary/warehouse-summary.component';
import {ResetPasswordComponent} from './_auth/reset-password/reset-password.component';
import {ConfigurationCreateSummaryComponent} from './_im/configuration-create-summary/configuration-create-summary.component';
import {MacrosComponent} from './_im/macros/macros.component';
import {TemplatesComponent} from './_im/templates/templates.component';
import {UsermanagementComponent} from './_users/usermanagement/usermanagement.component';
import {WarehouseCreateComponent} from './_warehouses/warehouse-create/warehouse-create.component';
import {TemplateCreateComponent} from './_im/template-create/template-create.component';
import {FilesManagerComponent} from './_components/files-manager/files-manager.component';
import {ConfigurationSummaryComponent} from './_im/configuration-summary/configuration-summary.component';
import {IntegrationsComponent} from './_im/integrations/integrations.component';
import {PagesLayoutComponent} from './vendors/pages-layout/pages-layout.component';
import {FilemanagerComponent} from './_im/filemanager/filemanager.component';
import {ConfigurationsComponent} from './_im/configurations/configurations.component';
import {ActiansigninComponent} from './_auth/actiansignin/actiansignin.component';
import {ConfigurationCreateComponent} from './_im/configuration-create/configuration-create.component';
import {LogDetailsComponent} from './_im/log-details/log-details.component';
import {DataGridComponent} from './_components/data-grid/data-grid.component';
import {EulaComponent} from './_auth/eula/eula.component';
import {DjaruploaderComponent} from './_components/djaruploader/djaruploader.component';
import {ActianRegisterComponent} from './_auth/actian-register/actian-register.component';
import {IntegrationManagerComponent} from './_im/integration-manager/integration-manager.component';
import {OffersComponent} from './_auth/offers/offers.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {BaseLayoutComponent} from './vendors/base-layout/base-layout.component';
import {TemplateSummaryComponent} from './template-summary/template-summary.component';
import {ModalsComponent} from './vendors/modals/modals.component';
import {WarehouseDetailsComponent} from './_warehouses/warehouse-details/warehouse-details.component';

const routes: Routes = [

  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // Login Register Pages
      { path: '', component: ActiansigninComponent, data: { extraParameter: '' } },
      { path: 'actian/eula', component: EulaComponent, data: { extraParameter: '' } },
      { path: 'actian/register', component: ActianRegisterComponent, data: { extraParameter: '' } },
      { path: 'actian/forgot-password', component: ActianForgotPasswordComponent, data: { extraParameter: '' } },
      { path: 'actian/reset-password', component: ResetPasswordComponent, data: { extraParameter: '' } },
      { path: 'actian/confirm-password', component: ConfirmEmailComponent, data: { extraParameter: '' } },
      { path: 'actian/offers', component: OffersComponent, data: { extraParameter: '' } },
      { path: 'components/modals', component: ModalsComponent, data: { extraParameter: 'componentsMenu' } },
    ]
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboards
      { path: 'dashboards/clusters/create-new', component: ConfigurationCreateComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/clusters/create-new-summary', component: ConfigurationCreateSummaryComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/clusters/create-new-template', component: TemplateCreateComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/clusters/upload-file', component: UploadFileComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/configurations', component: ConfigurationsComponent, data: { extraParameter: 'dashboardsMenu' } },

      { path: 'im', component: IntegrationsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/configurations', component: ConfigurationsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/configurations/summary', component: ConfigurationSummaryComponent, data: {extraParameter: 'dashboardsMenu'}},
      { path: 'im/templates', component: TemplatesComponent, data: {extraParameter: 'dashboardsMenu'}},
      { path: 'im/templates/summary', component: TemplateSummaryComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/filemanager', component: FilemanagerComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/file-manager', component: FilesManagerComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/macros', component: MacrosComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'im/log/details', component: LogDetailsComponent, data: { extraParameter: 'dashboardsMenu' } },

      { path: 'dashboards/im', component: IntegrationManagerComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/usermanagement', component: UsermanagementComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/djarUploader', component: DjaruploaderComponent, data: { extraParameter: 'dashboardsMenu' } },


      { path: 'dashboards/warehouse', component: WarehouseSummaryComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/warehouse/details', component: WarehouseDetailsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'dashboards/warehouse/create-new', component: WarehouseCreateComponent, data: { extraParameter: 'dashboardsMenu' } },

      // Test Routes
      { path: 'im/test/components/data-grid', component: DataGridComponent, data: { extraParameter: 'dashboardsMenu' } },

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

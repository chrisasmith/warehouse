import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// BOOTSTRAP COMPONENTS

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LaddaModule } from 'angular2-ladda';
import { NgxLoadingModule } from 'ngx-loading';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CountUpModule } from 'countup.js-angular2';
import { AgmCoreModule } from '@agm/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { NouisliderModule } from 'ng2-nouislider';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TextMaskModule } from 'angular2-text-mask';
import { ClipboardModule } from 'ngx-clipboard';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { ColorPickerModule } from 'ngx-color-picker';
import {DropzoneComponent, DropzoneModule} from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ChartsModule } from 'ng2-charts';

import { GaugeModule } from 'angular-gauge';
import { TrendModule } from 'ngx-trend';
import {TemplatesComponent} from './_im/templates/templates.component';
import {UsermanagementComponent} from './_users/usermanagement/usermanagement.component';
import {TemplateCreateComponent} from './_im/template-create/template-create.component';
import {FilemanagerComponent} from './_im/filemanager/filemanager.component';
import {TemplateDetailsComponent} from './_im/template-details/template-details.component';
import {ConfigurationsModule} from './configurations/configurations.module';
import {TemplateSummaryComponent} from './template-summary/template-summary.component';
import {ConfigActions} from './vendors/store/config.actions';
import {httpInterceptorProviders} from './_guards/auth-interceptor';
import {ThemeOptions} from './theme-options';
import {ArchitectUIState, rootReducer} from './vendors/store';
import {AuthModule} from './_auth/auth.module';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {ModalComponent} from './_directives';
import {WarehousesModule} from './_warehouses/warehouses.module';
import {MacrosComponent} from './_im/macros/macros.component';
import {IntegrationsComponent} from './_im/integrations/integrations.component';
import {ComponentsModule} from './_components/components.module';
import {MacroAddComponent} from './_im/macro-add/macro-add.component';
import {FilemgrComponent} from './_modals/filemgr/filemgr.component';
import {LogDetailsComponent} from './_im/log-details/log-details.component';
import {IntegrationManagerComponent} from './_im/integration-manager/integration-manager.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {HeadingtitleModule} from './_components/headingtitle/headingtitle.module';
import {VendorsModule} from './vendors/vendors.module';
import {HeadingtitlenavModule} from './_components/headingtitlenav/headingtitlenav.module';
import {HeadingtitlenavTemplateComponent} from './headingtitlenav-template/headingtitlenav-template.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    LaddaModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    RoundProgressModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    ToastrModule.forRoot(),
    SlickCarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CountUpModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: ''
    }),
    ImageCropperModule,
    AngularStickyThingsModule,
    NouisliderModule,
    NgSelectModule,
    SelectDropDownModule,
    NgMultiSelectDropDownModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    AngularEditorModule,
    HttpClientModule,
    TextMaskModule,
    ClipboardModule,
    TextareaAutosizeModule,
    ColorPickerModule,
    DropzoneModule,

    // Charts

    ChartsModule,
    NgApexchartsModule,
    GaugeModule.forRoot(),
    TrendModule,

    AuthModule,
    WarehousesModule,
    ComponentsModule,
    ConfigurationsModule,
    HeadingtitleModule,
    HeadingtitlenavModule,
    VendorsModule
  ],
  declarations: [
    AppComponent,
    IntegrationsComponent,
    UsermanagementComponent,
    IntegrationManagerComponent,
    TemplateSummaryComponent,
    HeadingtitlenavTemplateComponent,
    TemplatesComponent,
    MacrosComponent,
    TemplateCreateComponent,
    UploadFileComponent,
    ModalComponent,
    MacroAddComponent,
    TemplateDetailsComponent,
    FilemanagerComponent,
    FilemgrComponent,
    LogDetailsComponent

  ],
  exports: [

  ],
  providers: [
    httpInterceptorProviders,
    DatePipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ConfigActions,
    ThemeOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}

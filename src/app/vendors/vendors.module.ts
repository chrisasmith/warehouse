import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PagesLayoutComponent} from './pages-layout/pages-layout.component';
import {PageTitleComponent} from './page-title/page-title.component';
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import {ModalsComponent} from './modals/modals.component';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SidebarModule} from './sidebar/sidebar.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        LoadingBarModule,
        PerfectScrollbarModule,
        SidebarModule,
        HeaderModule,
        FooterModule
    ],
    declarations: [
        PagesLayoutComponent,
        PageTitleComponent,
        ModalsComponent,
        BaseLayoutComponent
    ],
    exports: [
        PagesLayoutComponent,
        PageTitleComponent,
        ModalsComponent,
        BaseLayoutComponent
    ]
})
export class VendorsModule {
}

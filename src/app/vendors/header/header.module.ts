import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header.component';
import {UserBoxComponent} from './elements/user-box/user-box.component';
import {SearchBoxComponent} from './elements/search-box/search-box.component';
import {MegamenuComponent} from './elements/mega-menu/mega-menu.component';
import {DrawerComponent} from '../../_components/drawer/drawer.component';
import {DotsComponent} from './elements/dots/dots.component';
import {RouterModule} from '@angular/router';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbDropdownModule, NgbPopoverModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {TrendModule} from 'ngx-trend';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MegapopoverComponent} from './elements/mega-menu/elements/megapopover/megapopover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PerfectScrollbarModule,
        NgbPopoverModule,
        RoundProgressModule,
        TrendModule,
        AngularFontAwesomeModule,
        NgbTabsetModule,
        NgbDropdownModule
    ],
    declarations: [
        HeaderComponent,
        UserBoxComponent,
        SearchBoxComponent,
        MegamenuComponent,
        MegapopoverComponent,
        DotsComponent
    ],
    exports: [
        HeaderComponent,
        UserBoxComponent,
        SearchBoxComponent,
        MegamenuComponent,
        MegapopoverComponent,
        DotsComponent
    ],
})
export class HeaderModule {
}

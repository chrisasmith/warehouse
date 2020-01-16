import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActianForgotPasswordComponent} from './actian-forgot-password/actian-forgot-password.component';
import {ActianRegisterComponent} from './actian-register/actian-register.component';
import {ActiansigninComponent} from './actiansignin/actiansignin.component';
import {ConfirmEmailComponent} from './confirm-email/confirm-email.component';
import {EulaComponent} from './eula/eula.component';
import {OffersComponent} from './offers/offers.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    ActianForgotPasswordComponent,
    ActianRegisterComponent,
    ActiansigninComponent,
    ConfirmEmailComponent,
    EulaComponent,
    OffersComponent,
    ResetPasswordComponent
  ],
  exports: [
    ActianForgotPasswordComponent,
    ActianRegisterComponent,
    ActiansigninComponent,
    ConfirmEmailComponent,
    EulaComponent,
    OffersComponent,
    ResetPasswordComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

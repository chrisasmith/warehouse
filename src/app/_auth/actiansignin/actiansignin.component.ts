import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from '../../_models/auth-login-info';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../../_services/token.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-actiansignin',
  templateUrl: './actiansignin.component.html',
  styleUrls: ['./actiansignin.component.scss']
})
export class ActiansigninComponent implements OnInit {
  private form: any = {};
  private isLoggedIn = false;
  private isLoginFailed = false;
  private loginInfo: AuthLoginInfo;
  errorMessage = '';

  step = 0;
  titleHeader = '';
  createAccount = true;
  confirmEmail = false;
  login = false;
  freeTrial = false;
  constructor(private authService: AuthService, private tokenService: TokenService, public router: Router) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  loadStep(step: number) {
    this.step = step;
    switch (this.step) {
      case 1:
        this.createAccount = true;
        this.confirmEmail = false;
        this.login = false;
        this.freeTrial = false;
        break;
      case 2:
        this.createAccount = false;
        this.confirmEmail = true;
        this.login = false;
        this.freeTrial = false;
        break;
      case 3:
        this.createAccount = false;
        this.confirmEmail = false;
        this.login = true;
        this.freeTrial = false;
        break;
      case 4:
        this.createAccount = false;
        this.confirmEmail = false;
        this.login = false;
        this.freeTrial = true;
        this.onSubmit();
        break;

      default:
        break;
    }
    console.log(this.step);
  }

  onSubmit() {
    // console.log(this.form);

    this.loginInfo = new AuthLoginInfo(this.form.username, this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenService.saveToken(data.access_token);
        // this.tokenService.saveUsername(data.username);
        // this.tokenService.saveAuthorities(data.authorities);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(['dashboards/integrations']);
        // this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

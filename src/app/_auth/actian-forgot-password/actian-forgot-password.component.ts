import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-actian-forgot-password',
  templateUrl: './actian-forgot-password.component.html',
  styleUrls: ['./actian-forgot-password.component.scss']
})
export class ActianForgotPasswordComponent implements OnInit {
  private emailSent: boolean = false;
  private form: any = {};
  errorMessage = '';

  constructor(public router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f);
    if (f.errors != null) {
      this.errorMessage = f.errors;
    }

    if (f.valid) {
      this.resetPassword(f.value.email);
    }
  }

  resetPassword(email: string) {
    if (email) {
      this.emailSent = true;
      console.log('password reset');
    }
  }

}

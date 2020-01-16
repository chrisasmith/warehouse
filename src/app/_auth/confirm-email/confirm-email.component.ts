import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  public confirmedEmail = false;
  private form: any = {};
  errorMessage = '';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toggleEmail() {
    this.confirmedEmail = true;
  }

  onSubmit(f) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f);
    if (f.errors != null) {
      this.errorMessage = f.errors;
    }

    if (f.valid) {
      this.router.navigate(['actian/eula']);
    }


  }


}

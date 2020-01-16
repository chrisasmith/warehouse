import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-actian-register',
  templateUrl: './actian-register.component.html',
  styleUrls: ['./actian-register.component.scss']
})
export class ActianRegisterComponent implements OnInit {
  private form: any = {};
  errorMessage = '';

  constructor(public router: Router) { }

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
      this.router.navigate(['actian/confirm-password']);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.scss']
})
export class LogDetailsComponent implements OnInit {
  // Visuals
  heading = 'Job Details';
  subheading = 'Configuration > Logs';
  page = 'logdetails';

  constructor() { }

  ngOnInit() {
  }

}

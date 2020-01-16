import { Component, OnInit } from '@angular/core';
import { IntegrationsService } from '../../_services/integrations.service';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
  private isLoggedIn = false;
  private imData: [any];

  // Visuals
  heading = 'Integration Manager';
  subheading = 'Overview of Integration';

  constructor() { }

  ngOnInit() {
   
  }
}

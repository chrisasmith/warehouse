import { Component, OnInit } from '@angular/core';
import { JobconfigurationsService } from '../../_services/jobconfigurations.service';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  private isLoggedIn = false;
  // Visuals
  heading = 'Configurations';
  subheading = 'Integration > Configuration';
  page = 'configurations';

  step = 0;
  configurationList = true;

  jobconfigs = [];

  constructor(private jobconfigurationsService: JobconfigurationsService, private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;

      this.jobconfigurationsService.getJobConfigs().subscribe(data => {
        console.log(data);
        this.jobconfigs.push(data);
      });
    }
  }

  loadSteps(number) {
    switch (number) {
      case 1:
        this.configurationList = false;
        break;

      default:
        break;
    }
  }
}

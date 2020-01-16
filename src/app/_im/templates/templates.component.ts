import { Component, OnInit } from '@angular/core';
import { JobconfigurationsService } from '../../_services/jobconfigurations.service';
import { TokenService } from '../../_services/token.service';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  private isLoggedIn = false;

  jobtemplates = [];
  constructor(private jobconfigurationsService: JobconfigurationsService, private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;

      this.jobconfigurationsService.getJobTemplates().subscribe(data => {
        console.log(data);
        this.jobtemplates.push(data);
      });
    }
  }

}

import { Injectable } from '@angular/core';
import { JobConfig } from '../providers/configurations/job-config';
import { JobConfigs } from '../providers/configurations/job-configs';
import { ConfigurationService } from '../providers/configurations/configuration.service';
import { Observable } from 'rxjs/Observable';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class JobConfigService {
  constructor( private configApi = ConfigurationService) { 

  }

  getJobConfigs(){  
     //return this.configApi.getJobConfigs(); 
  }
  
  getJobConfig(id: string): Observable<JobConfig[]> {
    //return this.configApi.getJobConfigById(id);
    return;
  }

}

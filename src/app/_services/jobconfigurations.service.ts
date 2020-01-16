import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobConfigs } from '../_models/jobconfigs';
import { JobConfig } from '../_models/jobconfig';
import { JobTemplates } from '../_models/jobtemplates';
import { JobMacros } from '../_models/jobmacros';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class JobconfigurationsService {
  constructor(private http: HttpClient) {}

  getJobConfigs() {
    return this.http.get<JobConfigs>(API_URL + 'jobconfigs');
  }

  getJobConfigById(id: number) {
    return this.http.get<JobConfig>(API_URL + 'jobconfig/' + id);
  }

  getJobTemplates() {
    return this.http.get<JobTemplates>(API_URL + 'jobconfigs');
  }

  getJobMacros(id: number) {
    return this.http.get<JobMacros>(API_URL + 'jobconfigs/' + id + '/macros');
  }
}

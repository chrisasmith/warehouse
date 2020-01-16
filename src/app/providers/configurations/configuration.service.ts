import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { JobConfigs } from './job-configs';
import { JobConfig } from './job-config';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor(private http: HttpClient) {}

  // API: GET /jobconfigs
  public getJobConfigs(): Observable<JobConfig[]> {
    return this.http
      .get(API_URL + '/jobconfigs')
      .map(response => {
        const jobConfigs = response;
        if (jobConfigs instanceof Array) {
          return jobConfigs.map(resJobConfigs => new JobConfigs(resJobConfigs, 10));
        }
      })
      .catch(this.handleError);
  }

  // API: POST /jobconfigs
  public createJobConfigs() {}

  // API: GET /jobconfigs/:id
  public getJobConfigsById(jobConfigId: string) {
    return this.http
      .get(API_URL + '/jobConfig/' + jobConfigId)
      .map(response => {
        const jobConfigs = response;
        if (jobConfigs instanceof Array) {
          return jobConfigs.map(resJobConfigs => new JobConfigs(resJobConfigs, 10));
        }
      })
      .catch(this.handleError);
  }

  // API: PUT /jobconfigs/:id
  public UpdateJobConfigsById(jobConfigId: string) {}

  // API: DELETE /jobconfigs/:id
  public deleteJobConfigsById(jobConfigId: string) {}

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

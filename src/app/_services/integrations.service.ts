import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Integrations } from '../_models/integrations';
import { Jobstats } from '../_models/jobstats';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class IntegrationsService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getJobs(): Observable<Integrations> {
    const begda = this.datePipe.transform(new Date(new Date().setDate(new Date().getDate() - 1)), 'yyyy-MM-dd').toString();
    console.log('Begda -15 days: ' + begda);

    const endda = this.datePipe.transform(new Date(), 'yyyy-MM-dd').toString();
    console.log('Endda: ' + endda);

    let params = new HttpParams();
    params = params.append('startdate', begda);
    params = params.append('enddate', endda);

    console.log(params);

    const options = { params };

    return this.http.get<Integrations>(API_URL + 'jobs', options);
  }

  // getJobs(startDate: string, endDate: string): Observable<Integrations> {
  //   let params = new HttpParams();
  //   params = params.append('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd').toString());
  //   params = params.append('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd').toString());

  //   const options = { params };
  //   return this.http.get<Integrations>(API_URL + 'jobs', options);
  // }

  // getJobs(startDate, endDate, jobState): Observable<Integrations> {
  //   let params = new HttpParams();
  //   params = params.append('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd').toString());
  //   params = params.append('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd').toString());
  //   params = params.append('state', jobState);

  //   const options = { params };
  //   return this.http.get<Integrations>(API_URL + 'jobs', options);
  // }

  getJobStats(): Observable<Jobstats> {
    const begda = this.datePipe.transform(new Date(new Date().setDate(new Date().getDate() - 1)), 'yyyy-MM-dd').toString();
    console.log('Begda -15 days: ' + begda);

    const endda = this.datePipe.transform(new Date(), 'yyyy-MM-dd').toString();
    console.log('Endda: ' + endda);

    let params = new HttpParams();
    params = params.append('startdate', begda);
    params = params.append('enddate', endda);

    const options = { params };
    return this.http.get<Jobstats>(API_URL + 'jobstats', options);
  }

  // getJobStats(startDate, endDate): Observable<Jobstats> {
  //   let params = new HttpParams();
  //   params = params.append('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd').toString());
  //   params = params.append('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd').toString());

  //   const options = { params };
  //   return this.http.get<Jobstats>(API_URL + 'jobstats', options);
  // }
}

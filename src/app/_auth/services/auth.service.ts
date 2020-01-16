import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../../_models/jwt-response';
import {environment} from '../../../environments/environment';

const API_URL = environment.apiURL;
const httpHeaders = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signinUrl = API_URL + 'login';
  // private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {}

  // JwtResponse(accessToken,type,username,authorities)
  attemptAuth(credentials: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.signinUrl, credentials, httpHeaders);
  }

  // SignUpInfo(name,username,email,role,password)
  // signup(credentials: any): Observable<JwtResponse> {
  //   return this.http.post<JwtResponse>(this.signupUrl, credentials, httpHeaders);
  // }
}

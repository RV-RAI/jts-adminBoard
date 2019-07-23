import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginResponse } from './Models/loginResponse.model'
import { Observable } from 'rxjs';
import { signupResponse } from './Models/signupResponse.model';
import { forgatpasswordResponse } from './Models/forgatpasswordResponse.model';
import { signup2Response } from './Models/signup2Response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http: HttpClient) { }
  createLogin(login): Observable<loginResponse> {
    return this.http.post<loginResponse>("https://web.jtsboard.com/web_service_angular/login", login);
  }

  createPassword(forgat): Observable<forgatpasswordResponse> {
    return this.http.post<forgatpasswordResponse>("https://web.jtsboard.com/web_service_angular/forgot_password", forgat);
  }
  createSignup(signup): Observable<signupResponse> {
    return this.http.post<signupResponse>("https://api.jtsboard.com/web_servicesv42/signup", signup);
  }
  createSignup2(cform): Observable<signup2Response> {
    return this.http.post<signup2Response>("https://web.jtsboard.com/web_service_angular/signup_step2", cform);

  }

}

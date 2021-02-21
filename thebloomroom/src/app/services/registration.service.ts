import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registrations } from 'src/app/models/registrations';
import { registrationsUrl } from '../config/api';
import { MessengerService } from 'src/app/services/messenger.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor
  (
    private http:HttpClient,
    private msg:MessengerService) { }

  registerUser(registration : Registrations):Observable<any>{
    return this.http.post(registrationsUrl, registration) 
  }
  verifySignIn(email:string):Observable<Registrations[]> {
    var searchUrl=registrationsUrl+"?email="+email;
    return this.http.get<Registrations[]>(searchUrl);
 }
    
  
  
  

  
}

import { Injectable } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private msg:MessengerService) { }

  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { SignInService } from 'src/app/services/sign-in.service';
import { MessengerService } from '../services/messenger.service';
import { Router } from '@angular/router';
import { productsUrl } from '../config/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMsg:string;

  constructor(
    private formBuilder : FormBuilder,
    private registrationService : RegistrationService,
    private msg : MessengerService,
    private signInService : SignInService,
    private router:Router
    ) {
   

   this.signInForm = formBuilder.group({
    emailAddr: ['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]],
    password : ['', [Validators.minLength(8), Validators.required]],
    });
  }


  ngOnInit(): void {
    
  }

  signInUser(){
    this.errorMsg='';
    this.registrationService.verifySignIn(this.signInForm.value.emailAddr).subscribe((registration)=>{
      if(this.signInForm.value.password==registration[0].password){
        this.router.navigate(['/shop']);
      }else{
         this.errorMsg="incorrect password";
      }
    })

  }
 

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
import { productsUrl } from '../config/api';
import { MessengerService } from 'src/app/services/messenger.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm : FormGroup;
  userExists : string;

  constructor(
    private formBuilder:FormBuilder,
    private registrationservice:RegistrationService,
    private router:Router,
    private msg:MessengerService
    ) { 
  /*  this.registrationForm = formBuilder.group({
      emailAddr: new FormControl(),
      password : new FormControl(),
      firstNameField : new FormControl(),
      lastNameField : new FormControl(),
      phoneNumberField : new FormControl(),
      });
      */

     this.registrationForm = formBuilder.group({
      nameField : ['', Validators.required],
      userNameField : ['',Validators.required],
      phoneNumberField : ['',[Validators.pattern('^[7-9][0-9]{9}$'), Validators.required]],
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]],
      password : ['', [Validators.minLength(8),Validators.required]],
      
      });
  }

  ngOnInit(): void {
    
  }
  register(){
    this.userExists='';
    this.registrationservice.verifySignIn(this.registrationForm.value.email).subscribe((registration)=>{
    if(registration.length==0){
      this.registrationservice.registerUser(this.registrationForm.value).subscribe(()=>{
        this.router.navigateByUrl('/shop');
      })
    }else{
      this.userExists="User Alredy exist";
    }
    })   
  }
}

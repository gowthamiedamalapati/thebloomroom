import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;

  constructor(private formBuilder:FormBuilder ) { 
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

}

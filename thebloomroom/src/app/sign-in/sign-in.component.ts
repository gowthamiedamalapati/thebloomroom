import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {
   /* this.signInForm = formBuilder.group({
    emailAddr: new FormControl(),
    password : new FormControl(),
    });
    */

   this.signInForm = formBuilder.group({
    emailAddr: ['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]],
    password : ['', [Validators.minLength(8), Validators.required]],
    });
  }


  ngOnInit(): void {
  }

}

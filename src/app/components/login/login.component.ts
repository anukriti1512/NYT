import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //variables
  mode: string = 'signUp';

  constructor(private fb: FormBuilder) {}

  // Login Form - group
  loginForm = this.fb.group({
    email: ['anukriti', Validators.required],
    password: ['', Validators.required],
  });

  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  // submitting values to the signup form
  onSubmitSignUpForm(form: FormGroup) {
    console.log(' submitted successfully !', form);
  }

  onSubmitLoginForm(form: FormGroup) {
    console.log('successfulyy logged in ', form);
  }
}

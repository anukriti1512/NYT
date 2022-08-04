import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //variables
  mode: string = 'signUp';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataSharingService: DataSharingService
  ) {}

  // Login Form - group
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
    ],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  // submitting values to the signup form
  onSubmitSignUpForm(form: FormGroup) {
    console.log(' submitted successfully !', form.value);
    localStorage.setItem(form.value.email, JSON.stringify(form.value)); // storing user details in local storage
    alert('User Registered Successfully ! Please Login');
    this.mode = 'login';

    // reset form
    this.signUpForm.reset();
  }

  // submitting values to the login form
  onSubmitLoginForm(form: FormGroup) {
    let userDetails = localStorage.getItem(this.loginForm.value.email);

    if (userDetails) {
      let userDetailsObj = JSON.parse(userDetails);
      if (userDetailsObj.password === this.loginForm.value.password) {
        alert('User Authenticated successfully !');
        sessionStorage.setItem('loggedInUser', userDetails);
        console.log(
          'get loggedin user details',
          sessionStorage.getItem('loggedInUser')
        );
        this.dataSharingService.isUserLoggedIn.next(true);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      } else {
        alert('Invalid Password');
        this.loginForm.reset();
      }
    } else {
      alert('Please Register User to Login !');
      this.mode = 'signUp';
      // reset form
      this.loginForm.reset();
    }
  }
}

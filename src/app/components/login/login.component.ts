
import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../../../core/auth.service';
// import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  signupform: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupform = this.fb.group({
       email: ['', [
           Validators.required,
           Validators.email
       ]],
      password: ['', [
          Validators.required,
          Validators.minLength(6)
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
       ]],
    });

  }

 get email() {
    return this.signupform.get('email');
 }
 get password() {
    return this.signupform.get('password');
 }

}

  // onSubmit() {
    // this.authService
    //   .register(this.email, this.password)
    //   .then(res => {
    //     this.router.navigate(["/dashboard"]);
    //   })
    //   .catch(err => console.log(err.message));
  // }


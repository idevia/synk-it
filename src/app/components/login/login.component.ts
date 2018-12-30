
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  public signupform: FormGroup;
  error: any;

  errorMessage =" "
  // public user$ = this.authService:AuthService;
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.signupform = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
      ]],
    });
   }

  ngOnInit() {
  

  }

 get email() {
    return this.signupform.get('email');
 }
 get password() {
    return this.signupform.get('password');
 }
 loginWithGoogle(){
   this.authService.loginWithGoogle()
   .then((success) => {
     console.log('GOOGLE_USER_RESPONSE: ', success);
       this.router.navigate(['/dashboard']);
     }).catch(
       (err) => {
         this.error = err;
         console.log('LOGIN_WITH_GOOGLE_ERR:', err);
       })
 }
login(){
  const inputValue = this.signupform.value;
  // console.log(inputValue.email, inputValue.password);
 
  this.authService.login(inputValue.email, inputValue.password)
    .then((data) => {
      console.log(data);
      // console.log(data.user.email);

      this.router.navigate(['/dashboard']);
    }).catch(err => {
      this.errorMessage = "email not registered"
      console.log(this.errorMessage);
    })
}


}
  // }


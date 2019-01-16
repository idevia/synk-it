import { AngularFireDatabase } from '@angular/fire/database';

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  public signupform: FormGroup;
  error: any;
  data = '';

  errorMessage =" "
  // public user$ = this.authService:AuthService;
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router,private db:AngularFireDatabase) {
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


 get email() {
    return this.signupform.get('email');
 }
 get password() {
    return this.signupform.get('password');
 }
 loginWithGoogle(){
   this.authService.loginWithGoogle()
   .then(res => {
     let user = res.user;
     let googleUsersObject = this.db.object(`users/${user.uid}`).valueChanges();
     googleUsersObject.subscribe(data => {
       let userList = this.db.list(`users/${user.uid}`);
       if (data !== null ){

       }
       else{
          userList.push({
            name: user.displayName,
            email: user.email,
            isEmailverified: user.emailVerified,
            isAdmin: false,
            photoUrl: user.photoURL,
            Phone: null,
            created_at:Date.now()
         });
       }
       
       
       this.router.navigate(['/dashboard']);
        console.log(data);
      });
   }).catch(
       (err) => {
         this.error = err;
         console.log('LOGIN_WITH_GOOGLE_ERR:', err);
       })
      //  this.router.navigate(['/dashboard']);
     
    //  .catch(
    //    (err) => {
    //      this.error = err;
    //      console.log('LOGIN_WITH_GOOGLE_ERR:', err);
    //    })
  //  .then((success) => {
  //    console.log('GOOGLE_USER_RESPONSE: ', success);
  //      this.router.navigate(['/dashboard']);
  //    }).catch(
  //      (err) => {
  //        this.error = err;
  //        console.log('LOGIN_WITH_GOOGLE_ERR:', err);
  //      })
  
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


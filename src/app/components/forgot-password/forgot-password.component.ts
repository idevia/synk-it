import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  //  myGroup: FormGroup;
  resetPassword = false;
  error:any;
  email:string;
  constructor(private authService: AuthService) { }

    myGroup = new FormGroup({
     email: new FormControl(),
    //  password: new FormControl();
   });
  
  sendResetEmail(data) {
    // console.log(data);
  
    this.authService.resetPassword(data.email)
      .then((res) =>{
console.log(res);
        this.resetPassword = true
        })
      .catch(_error => {
        this.error = _error
      })
  }

  ngOnInit() {
  }

}

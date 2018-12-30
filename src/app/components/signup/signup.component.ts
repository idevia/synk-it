import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/auth.service';

// import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error:any;
  
  errorMessage:any;
  successMessage:any;
  constructor(private fb: FormBuilder,private af:AuthService, private router:Router ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
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
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  submitForm(){
    const inputValue = this.signupForm.value;
    this.af.signupForm(inputValue.email,inputValue.password)
      .then((res) =>{
        if (res.user.emailVerified !== true){
          console.log('email not verified verify the emial');
          this.router.navigate(['/login']);
        }
        else{    
              this.router.navigate(['/dashboard']);
         }
      })
      .catch((err) =>{
        this.error = err;
        this.router.navigate(['/signup']);
      });
}
  
// async submitForm(){
//   this.loading =true;
//   const formValue =this.signupForm.value;
//   try{
//       await this.afs.collection('users').add(formValue);
//     this.success =true;
//   }
//   catch(err){
//       console.error(err);
//   }
//   this.loading =false;
// }
}

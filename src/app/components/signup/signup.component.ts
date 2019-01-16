import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/auth.service';
import * as firebase from 'firebase/app';
// import { UserService } from 'src/core/user.service';
import { User } from './../../../core/modals/user';

// import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup;
  user: User = {
        email:'',
    
  } 
  error:any;
  users: User[];
  errorMessage:any;
  successMessage:any;
  constructor(private fb: FormBuilder,private af:AuthService, private router:Router,private db:AngularFireDatabase ) { }

  signupForm = this.fb.group({
  email: ['', [
    Validators.required,
    Validators.email
  ]],
  password: ['', [
    Validators.required,
    Validators.minLength(6),
  ]],
});
  ngOnInit() {
    // this.userService.getUsers().subscribe(users =>  {
    //   // 
    //   this.users = users;

    // }); 
   

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
      .then(res => {
        let user = res.user;
        let signUpUsersObject = this.db.object(`users/${user.uid}`).valueChanges();
        signUpUsersObject.subscribe(data => {
          let userList = this.db.list(`users/${user.uid}`);
          if (data !== null && user.emailVerified !== true) {
            var user = firebase.auth().currentUser;   
           user.sendEmailVerification().then(function(){
              window.alert("verification start");
           })
            //  console.log('email not verified check the mail and verify')
            this.router.navigate(['/login']);

          }
          else {
            userList.push({
              name: user.displayName,
              email: user.email,
              isEmailverified: user.emailVerified,
              isAdmin: false,
              photoUrl: user.photoURL,
              Phone: null,
              created_at: Date.now()
            });
            this.router.navigate(['/dashboard']);
          }

          
          console.log(data);
        });
      })
      .catch((err) => {
        this.error = err;
        this.router.navigate(['/signup']);
      });
  }
      //  .then(res =>{
      //   if (res.user.emailVerified !== true){
      //     console.log('email not verified verify the emial');
          
      //     this.router.navigate(['/login']);
      //   }
      //   else{    
      //         this.router.navigate(['/dashboard']);
      //    }
      // })
     
  
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

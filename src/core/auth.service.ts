import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { Router } from '@angular/router';

// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
error:any;
authState : any;
  constructor(private afAuth: AngularFireAuth,private db:AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
  }
  login(email, password) {
    // return new Observable.fromPromise(
    // return new Promise<any>((resolve, reject) => {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    
    
    
    
    
    //     .then(userData => resolve(userData),
    //       err => reject(err));
    // });
  }
  
  // }
  signupForm(email,password) {
    return new Promise<any>((resolve, reject)=>{
     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
       .then(userData =>resolve(userData),
         err => reject(err));
    }); 
  }
  resetPassword(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }
  signOut() {
    this.afAuth.auth.signOut();
  }

  //test
  
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from '@angular/fire/firestore';
// import * as firebase from 'firebase/app';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    // this.afAuth.authState.subscribe(auth => console.log(auth));
  }

  // login(email: string, password: string) {
  //   return new Promise((resolove, reject) => {
  //     this.afAuth.auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then(userData => resolove(userData), err => reject(err));
  //   });
  // }
  // getAuth() {
  //   return this.afAuth.authState.subscribe(auth => auth);
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
  // register(email: string, password: string) {
  //   return new Promise((resolove, reject) => {
  //     this.afAuth.auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(userData => resolove(userData), err => reject(err));
  //   });
  // }
}

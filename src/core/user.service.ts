import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from './modals/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.users = db.list('users').valueChanges();
  } 
 
}


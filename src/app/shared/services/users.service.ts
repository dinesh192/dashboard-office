import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];
  usersSubject = new Subject<User[]>();
  birthdaySubject = new Subject<any>();
  usersBirthday: User[];

  constructor() {}

  emitUsers() {
    this.usersSubject.next(this.users);
  }

  emitBirthday() {
    this.birthdaySubject.next(this.usersBirthday);
  }

  getUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .database()
            .ref('users/' + firebase.auth().currentUser.uid)
            .once('value')
            .then(
              snapshot => {
                resolve(snapshot.val());
              },
              error => {
                reject(error);
              }
            );
        } else {
          return;
        }
      });
    });
  }

  getAllUsers() {
    firebase
      .database()
      .ref()
      .child('users')
      .on('value', snapshot => {
        this.usersBirthday = snapshot.val() ? snapshot.val() : [];
        this.emitBirthday();
      });
  }
}

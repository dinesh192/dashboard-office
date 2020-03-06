import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User;
  userInformations: User;
  constructor() {}
  photo: any;
  user = firebase.auth().currentUser;

  signUpUser(email: string, password: string, userInformations: User) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve();
            this.saveInfoUser(userInformations);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  saveInfoUser(userInformations: User) {
    firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid)
      .set({
        firstName: userInformations.firstName,
        lastName: userInformations.lastName,
        birthdayDate: userInformations.birthdayDate,
        photoUrl: userInformations.photoUrl
      });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
  }

  signOutUser() {
    firebase.auth().signOut();
  }

  uploadFile(file: File) {
    return new Promise((resolve, reject) => {
      const almostUniqueFileName = Date.now().toString();
      const upload = firebase
        .storage()
        .ref()
        .child('images/users/' + almostUniqueFileName + file.name)
        .put(file);
      upload.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        error => {
          console.log(error);
          reject(error);
        },
        () => {
          resolve(upload.snapshot.ref.getDownloadURL());
        }
      );
    });
  }
}

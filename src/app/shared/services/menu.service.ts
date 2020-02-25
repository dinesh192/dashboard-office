import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu[] = [];

  constructor() {}

  getMenu() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .database()
            .ref('/menu')
            .on(
              'value',
              data => {
                resolve(data.val());
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
}

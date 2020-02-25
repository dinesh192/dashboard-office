import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { slideInAnimation } from './shared/animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA0On8jwlakqQ_Wtb9SQCnGPfV-6VYK2iE',
      authDomain: 'dashboard-c2e5f.firebaseapp.com',
      databaseURL: 'https://dashboard-c2e5f.firebaseio.com',
      projectId: 'dashboard-c2e5f',
      storageBucket: 'dashboard-c2e5f.appspot.com',
      messagingSenderId: '13116244986',
      appId: '1:13116244986:web:5f0a4f0cb5adf0b0e1da43'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

import { NgModule } from '@angular/core';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService]
})
export class CoreModule {}

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Collaborators } from '../models/collaborator';

@Injectable({
  providedIn: 'root'
})
export class BirthdayAddService {
  collaboratorsRef: AngularFireList<Collaborators> = null;

  constructor(private db: AngularFireDatabase) {
    this.collaboratorsRef = this.db.list('/collaborateurs');
  }

  createCustomer(customer: Collaborators) {
    return new Promise(() => {
      this.collaboratorsRef.push(customer).catch(err => {
        return err;
      });
    });
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.collaboratorsRef.update(key, value);
  }

  deleteCustomer(key): Promise<void> {
    return this.collaboratorsRef.remove(key);
  }

  getCustomersList(): AngularFireList<Collaborators> {
    return this.collaboratorsRef;
  }

  deleteAll(): Promise<void> {
    return this.collaboratorsRef.remove();
  }
}

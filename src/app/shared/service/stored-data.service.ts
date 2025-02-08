import { Injectable, OnDestroy, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  collectionData,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService implements OnDestroy {

  savedUsers:any[] = []

  // saveUsersSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  private firestore: Firestore = inject(Firestore);
  unsubUsers;
  adressID = 'users';

  constructor() {
    this.unsubUsers = this.subUserList()
  }

  subUserList(){
    return onSnapshot(this.getUserRef(), (list) => {
      this.savedUsers = [];
        list.forEach(user => {
          this.savedUsers.push(this.setUserObject(user.data(),user.id));
        });
        // this.saveUsersSubject.next(this.savedUsers);
      });
  }

  setUserObject(obj:any, id?:string):User {
    return {
      id: id,
      firstName: obj.firstName,
      lastName: obj.lastName,
      birthDate: obj.birthDate,
      mail: obj.mail,
      street: obj.street,
      zipCode: obj.zipCode,
      city: obj.city,

      toJSON() {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: this.birthDate,
          mail: this.mail,
          street: this.street,
          zipCode: this.zipCode,
          city: this.city
        }
      }
    }
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  getUserRef() {
    return collection(this.firestore, this.adressID);
  }

  async addToFireBase(content: User | object) {
    await addDoc(this.getUserRef(), content)
      .then((result: any) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  // getSingleDocRef( docID:string){
  //   return doc(collection(this.firestore, this.adressID), docID)
  // }
}

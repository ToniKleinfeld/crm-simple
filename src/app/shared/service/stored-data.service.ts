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
  Timestamp
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService implements OnDestroy {
  savedUsers: any[] = [];

  saveUsersSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  private firestore: Firestore = inject(Firestore);
  unsubUsers:any ;
  adressID = 'users';

  constructor() {
    this.initializeData();
  }

  initializeData() {
    this.unsubUsers = this.subUserList();
  }

  subUserList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.savedUsers = [];
      list.forEach((user) => {
        this.savedUsers.push(this.setUserObject(user.data(), user.id));
      });
      this.saveUsersSubject.next(this.savedUsers);
    });
  }

  setUserObject(obj: any, id?: string): User {
    return {
      id: id,
      firstName: obj ? obj.firstName : 'Empty',
      lastName:  obj ? obj.lastName : 'Empty',
      birthDate: obj ? obj.birthDate.toDate() : new Date,
      mail: obj ? obj.mail : 'Empty',
      street: obj ? obj.street : 'Empty',
      zipCode:  obj ? obj.zipCode : '00000',
      city: obj ? obj.city : 'Empty' ,
      img: obj ? obj.img : 'male1',
      bgColor: obj ? obj.bgColor : '#299ace',

      toJSON() {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: this.birthDate,
          mail: this.mail,
          street: this.street,
          zipCode: this.zipCode,
          city: this.city,
          img: this.img,
          bgColor: this.bgColor
        };
      },
    };
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

  getSingleDocRef( docID:string){
    return doc(collection(this.firestore, this.adressID), docID)
  }

  async updateUser(user: User){
    if (user.id) {
      await updateDoc(this.getSingleDocRef(user.id), user.toJSON()).catch(
        (err) => {console.error(err)}
      )
    }
  }
}

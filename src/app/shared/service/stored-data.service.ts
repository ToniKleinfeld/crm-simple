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
  private firestore: Firestore = inject(Firestore);
  adressID = 'users';

  constructor() {}

  ngOnDestroy() {}

  getUserRef() {
    console.log(collection(this.firestore, this.adressID));
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

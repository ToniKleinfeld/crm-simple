import { Component, OnDestroy, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../../../models/user.class';
import { StoredDataService } from '../../../shared/service/stored-data.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent implements OnInit, OnDestroy {
  user: User = new User();
  userID?: string | null;
  loading: boolean = false;
  editPart?: string;

  private saveUsersSubscription!: any;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private StoredDataService: StoredDataService,
    @Inject(MAT_DIALOG_DATA) public data: { userID: string; editPart: string }
  ) {
    this.userID = data.userID;
    this.editPart = data.editPart;
  }

  userImages: string[] = [
    'male1',
    'female1',
    'male2',
    'female2',
    'male3',
    'female3',
    'male4',
    'female4',
    'male5',
    'female5',
    'male6',
    'female6',
    'male7',
    'female7',
  ];

  pickedImg?: number;
  oldUserInfo?: any;

  ngOnInit(): void {
    this.saveUsersSubscription =
      this.StoredDataService.saveUsersSubject.subscribe(() => {
        this.user = this.getUsersData();
      });
  }

  ngOnDestroy(): void {
    this.saveUsersSubscription.unsubscribe();
  }

  onNoClick(): void {
    this.resetUser()
    this.dialogRef.close();
  }

  saveEdit() {
    this.loading = true;
    this.StoredDataService.updateUser(this.user);

    setTimeout(() => {
      this.dialogRef.close();
      this.loading = false;
    }, 1000);
  }

  getUsersData() {
    let userarray = this.StoredDataService.savedUsers;
    let filterForUserId = userarray.filter((user) => user.id === this.userID);
    this. oldUserInfo = this.saveOldUserData(filterForUserId[0])
    return filterForUserId[0];
  }

  changeProfilePic(id: number) {
    this.pickedImg = id;
    this.user.img = this.userImages[id];
  }

  saveOldUserData(obj:any){
    return {
      firstName : obj.firstName,
      lastName : obj.lastName,
      birthDate : obj.birthDate,
      mail : obj.mail,
      street : obj.street,
      zipCode : obj.zipCode,
      city : obj.city,
      img : obj.img,
      bgColor : obj.bgColor,
    }
  }

  resetUser(){
    this.user.firstName = this.oldUserInfo?.firstName!;
    this.user.lastName = this.oldUserInfo?.lastName!;
    this.user.birthDate = this.oldUserInfo?.birthDate!;
    this.user.mail = this.oldUserInfo?.mail!;
    this.user.street = this.oldUserInfo?.street!;
    this.user.zipCode = this.oldUserInfo?.zipCode!;
    this.user.city = this.oldUserInfo?.city!;
    this.user.img = this.oldUserInfo?.img!;
    this.user.bgColor = this.oldUserInfo?.bgColor!;
  }
}

import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../../../shared/module/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../models/user.class';
import { StoredDataService } from '../../../shared/service/stored-data.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MaterialModule,CommonModule],
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

  userImages: string[] = ['male1','female1','male2','female2','male3','female3','male4','female4','male5','female5','male6','female6','male7','female7'];
  pickedImg?:number ;
  oldImg?:string;

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
    this.user.img = this.oldImg ? this.oldImg : 'male1';
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
    this.oldImg = filterForUserId[0].img;
    return filterForUserId[0];
  }

  changeProfilePic(id:number) {
    this.pickedImg = id;
    this.user.img = this.userImages[id];
  }
}

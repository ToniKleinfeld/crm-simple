import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../../../shared/module/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../models/user.class';
import { StoredDataService } from '../../../shared/service/stored-data.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MaterialModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent implements OnInit, OnDestroy {
  user: User = new User();
  userID?: string | null;
  birthDate!: Date;
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

    return filterForUserId[0];
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

import { StoredDataService } from '../../shared/service/stored-data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { MaterialModule } from '../../shared/module/material.module';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-datail',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './user-datail.component.html',
  styleUrl: './user-datail.component.scss',
})
export class UserDatailComponent implements OnInit, OnDestroy {
  constructor(
    private StoredDataService: StoredDataService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  private saveUsersSubscription!: any;
  private routeParamSubscription!: any;

  user?: User;
  userID?: string | null;

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
    });

    this.saveUsersSubscription =
      this.StoredDataService.saveUsersSubject.subscribe(() => {
        this.user = this.getUsersData();
      });
  }

  ngOnDestroy(): void {
    this.saveUsersSubscription.unsubscribe();
    this.routeParamSubscription.unsubscribe();
  }

  getUsersData() {
    let userarray = this.StoredDataService.savedUsers;
    let filterForUserId = userarray.filter((user) => user.id === this.userID);

    return filterForUserId[0];
  }

  openEdit(edit: string) {
    this.blurArria();

    if (edit == '') {
      this.openDialog(DialogEditUserComponent);
    } else if (edit == 'address') {
      this.openDialog(DialogEditAddressComponent);
    }
  }

  openDialog(component: any) {
    this.blurArria();

    const dialogRef = this.dialog.open(component, {});
  }

  blurArria(){
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
  }
}

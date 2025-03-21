import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoredDataService } from '../../shared/service/stored-data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-datail',
    imports: [MatIcon, MatMenuModule, MatButtonModule, MatCardModule, CommonModule],
    templateUrl: './user-datail.component.html',
    styleUrl: './user-datail.component.scss'
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
    this.openDialog(DialogEditUserComponent, edit , '1500ms', '800ms');
  }

  openDialog(component: any, editPart: any ,enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(component, {
      data: { userID: this.userID, editPart },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(() =>  this.StoredDataService.initializeData() )
    ;
  }
}

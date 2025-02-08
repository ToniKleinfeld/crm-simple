import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StoredDataService } from '../../shared/service/stored-data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-datail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './user-datail.component.html',
  styleUrl: './user-datail.component.scss',
})
export class UserDatailComponent implements OnInit, OnDestroy {
  constructor(
    private StoredDataService: StoredDataService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
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

  openAddressDialog() {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // Remove focus from the button

    const dialogRef = this.dialog.open(DialogEditAddressComponent, {
      // data: {},
    });

    // dialogRef.afterClosed().subscribe((data) => {});
  }
}

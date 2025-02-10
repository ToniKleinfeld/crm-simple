import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { StoredDataService } from '../shared/service/stored-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/module/material.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  newUser: User = new User();

  constructor(
    public dialog: MatDialog,
    private StoredDataService: StoredDataService
  ) {}

  ngOnInit() {

  }

  getUsers() {
    return this.StoredDataService.savedUsers;
  }

  openDialog(): void {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // Remove focus from the button

    const dialogRef = this.dialog.open(DialogAddUserComponent, {
    });
  }
}

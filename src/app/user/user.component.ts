import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  firstName?:string;
  lastName?:string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // Remove focus from the button

    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      data: { firstName: this.firstName , lastName: this.lastName},
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    });
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { StoredDataService } from '../../shared/service/stored-data.service';

import { MaterialModule } from '../../shared/module/material.module';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MaterialModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private StoredDataService: StoredDataService
  ) {}

  firstName?: string;
  lastName?: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.StoredDataService.addToFireBase(this.user.toJSON());

    setTimeout(() => {
      this.dialogRef.close();
      this.loading = false;
    }, 1000);
  }
}

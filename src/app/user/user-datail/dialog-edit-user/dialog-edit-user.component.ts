import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/module/material.module';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {}

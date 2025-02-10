import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/module/material.module';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {}

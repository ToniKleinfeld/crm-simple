import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    MatIcon,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],

  exports: [
    MatIcon,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],
})
export class MaterialModule {}

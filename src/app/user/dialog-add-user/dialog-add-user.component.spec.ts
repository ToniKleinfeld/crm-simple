import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { StoredDataService } from '../../shared/service/stored-data.service';
import { MaterialModule } from '../../shared/module/material.module';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent,
        RouterModule.forRoot([]),
        MatDialog,
        MatDialogRef,
        MatDialogModule,
        MaterialModule
      ],
      providers: [Firestore, { provide: MatDialogRef , useValue : {}}, StoredDataService],
    }).compileComponents();


    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

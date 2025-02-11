import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StoredDataService } from '../../../shared/service/stored-data.service';
import { MaterialModule } from '../../../shared/module/material.module';
import { RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserComponent,
        RouterModule.forRoot([]),
        MatDialogModule,
        MatDialogRef,
        StoredDataService,
        MatDialogModule
      ],
      providers: [Firestore,  { provide: MatDialogRef , useValue : {}}],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

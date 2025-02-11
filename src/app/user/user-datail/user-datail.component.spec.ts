import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatailComponent } from './user-datail.component';
import { RouterModule } from '@angular/router';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { StoredDataService } from '../../shared/service/stored-data.service';
import { Firestore } from '@angular/fire/firestore';

describe('UserDatailComponent', () => {
  let component: UserDatailComponent;
  let fixture: ComponentFixture<UserDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDatailComponent,
        RouterModule.forRoot([]),
        MatDialog,
        MatDialogRef,
        MatDialogModule
      ],
        providers: [Firestore, { provide: MatDialogRef , useValue : {}},StoredDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

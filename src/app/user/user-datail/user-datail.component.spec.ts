import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatailComponent } from './user-datail.component';

describe('UserDatailComponent', () => {
  let component: UserDatailComponent;
  let fixture: ComponentFixture<UserDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

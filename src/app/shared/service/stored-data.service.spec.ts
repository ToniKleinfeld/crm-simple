import { TestBed } from '@angular/core/testing';
import { StoredDataService } from './stored-data.service';
import { Firestore } from '@angular/fire/firestore';

describe('StoredDataService', () => {
  let service: StoredDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Firestore],
    });
    service = TestBed.inject(StoredDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

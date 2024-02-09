import { TestBed } from '@angular/core/testing';

import { BidDataServiceService } from './bid-data-service.service';

describe('BidDataServiceService', () => {
  let service: BidDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BidderServiceService } from './bidder-service.service';

describe('BidderServiceService', () => {
  let service: BidderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

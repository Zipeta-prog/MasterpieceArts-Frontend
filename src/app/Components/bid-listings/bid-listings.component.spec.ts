import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidListingsComponent } from './bid-listings.component';

describe('BidListingsComponent', () => {
  let component: BidListingsComponent;
  let fixture: ComponentFixture<BidListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

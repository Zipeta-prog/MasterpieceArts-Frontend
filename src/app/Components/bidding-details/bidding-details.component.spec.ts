import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingDetailsComponent } from './bidding-details.component';

describe('BiddingDetailsComponent', () => {
  let component: BiddingDetailsComponent;
  let fixture: ComponentFixture<BiddingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiddingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

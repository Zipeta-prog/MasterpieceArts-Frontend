import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsManagementComponent } from './bids-management.component';

describe('BidsManagementComponent', () => {
  let component: BidsManagementComponent;
  let fixture: ComponentFixture<BidsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// bid-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidDataService {
  private bidDataSubject = new BehaviorSubject<ArtItem | null>(null);
  bidData$ = this.bidDataSubject.asObservable();

  updateBidData(data: ArtItem): void {
    this.bidDataSubject.next(data);
  }
}

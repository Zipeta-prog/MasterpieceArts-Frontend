import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidderServiceService {
  private apiUrl = 'your-api-endpoint';
  constructor(private http: HttpClient) { }

  updateBidderProfile(data: any): Observable<any> {
    const bidderId = data.bidderId; // Replace with the actual property name for bidder ID
    const updateUrl = `${this.apiUrl}/bidder-profile/${bidderId}`; // Assuming there is a unique identifier (bidderId)

    return this.http.put(updateUrl, data);
  }
}

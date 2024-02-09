import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserManagementComponent } from '../Components/user-management/user-management.component';
import { ProductManagementComponent } from '../Components/product-management/product-management.component';
import { BidsManagementComponent } from '../Components/bids-management/bids-management.component';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private apiUrl = 'your_api_endpoint'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserManagementComponent[]> {
    return this.http.get<UserManagementComponent[]>(`${this.apiUrl}/users`);
  }

  getProducts(): Observable<ProductManagementComponent[]> {
    return this.http.get<ProductManagementComponent[]>(`${this.apiUrl}/products`);
  }

  getBids(): Observable<BidsManagementComponent[]> {
    return this.http.get<BidsManagementComponent[]>(`${this.apiUrl}/bids`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private apiUrl = 'your_api_endpoint'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/users`);
  // }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/products`);
  // }

  // getCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  // }

  // getBids(): Observable<Bid[]> {
  //   return this.http.get<Bid[]>(`${this.apiUrl}/bids`);
  // }

  // sendUpdateEmails(): Observable<void> {
  //   return this.http.post<void>(`${this.apiUrl}/send-emails`, {});
  // }
}

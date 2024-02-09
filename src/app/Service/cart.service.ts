import { Injectable } from '@angular/core';
import { BiddingDetailsComponent } from '../Components/bidding-details/bidding-details.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: BiddingDetailsComponent[] = [];
  /* . . . */

    addToCart(bidding: BiddingDetailsComponent) {
      this.items.push(bidding);
    }

    getItems() {
      return this.items;
    }

    clearCart() {
      this.items = [];
      return this.items;
    }
  /* . . . */
}

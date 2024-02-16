// Add logic for place bid action; // bidding-details.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../Service/cart.service';
import { BidFormComponent } from "../bid-form/bid-form.component";


interface ArtItem {
  id: number;
  name: string;
  image: string;
  description: string;
  currentBid: number;
}

@Component({
    selector: 'app-bidding-details',
    templateUrl: './bidding-details.component.html',
    styleUrls: ['./bidding-details.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, BidFormComponent]
})
export class BiddingDetailsComponent {
  artItems: ArtItem[] = [
    { id: 1, name: 'Artwork 1', image: '../assets/Images/bentley.jpg', description: 'Description 1', currentBid: 100 },
    { id: 2, name: 'Artwork 2', image: '../assets/Images/gallery.jpg', description: 'Description 2', currentBid: 150 },
    { id: 3, name: 'Artwork 1', image: '../assets/Images/hydrangeas.jpg', description: 'Description 1', currentBid: 100 },
    { id: 4, name: 'Artwork 2', image: '../assets/Images/gallery.jpg', description: 'Description 2', currentBid: 150 },

  ];
  item!: ArtItem;

  constructor(private snackBar: MatSnackBar, private cartService: CartService) {}

  addToCart(bidding: BiddingDetailsComponent) {
    this.cartService.addToCart(bidding);
    window.alert('Your product has been added to the cart!');
  }

  placeBid(item: ArtItem): void {

    this.snackBar.open(`Bid placed for ${item.name}`, 'Close', { duration: 8000 });
  }

  increaseBid(item: ArtItem): void {

    this.snackBar.open(`Bid increased for ${item.name}`, 'Close', { duration: 8000 });
  }


}

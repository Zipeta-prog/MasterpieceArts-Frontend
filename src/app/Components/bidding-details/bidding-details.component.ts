// Add logic for place bid action; // bidding-details.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface ArtPiece {
  name: string;
  imagePath: string;
  year: number;
  startingBidPrice: number;
  estimateBidPrice: number;
}

@Component({
  selector: 'app-bidding-details',
  templateUrl: './bidding-details.component.html',
  styleUrls: ['./bidding-details.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class BiddingDetailsComponent {
  artPiece: ArtPiece = {
    name: 'Masterpiece Sale - Jane Doe',
    imagePath: '../assets/Images/Rectangle.png',
    year: 2024,
    startingBidPrice: 100,
    estimateBidPrice: 500
  };

  // Update logic for place bid action
  placeBid(): void {
    // Add your updated bidding logic here
    alert(`You placed a bid for ${this.artPiece.name} at $${this.artPiece.startingBidPrice}.`);
  }
}

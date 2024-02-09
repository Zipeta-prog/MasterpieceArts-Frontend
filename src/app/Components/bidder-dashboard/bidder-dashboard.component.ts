import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BidderProfileComponent } from '../bidder-profile/bidder-profile.component';
import { BidListingsComponent } from "../bid-listings/bid-listings.component";

interface AuctionItem {
  name: string;
  imagePath: string;
  description: string;
  currentBid: number;
}

@Component({
    selector: 'app-bidder-dashboard',
    standalone: true,
    templateUrl: './bidder-dashboard.component.html',
    styleUrl: './bidder-dashboard.component.css',
    imports: [CommonModule, RouterModule, BidderProfileComponent, BidListingsComponent]
})
export class BidderDashboardComponent {
  //selectedLink: any;
  selectedLink="bidListings"

  toggleMenu(link: string): void {
    this.selectedLink = link;}


}

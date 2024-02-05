import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface AuctionItem {
  name: string;
  imagePath: string;
  description: string;
  currentBid: number;
}

@Component({
  selector: 'app-bidder-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bidder-dashboard.component.html',
  styleUrl: './bidder-dashboard.component.css'
})
export class BidderDashboardComponent {
  items: AuctionItem[] = [
    { name: 'Artwork 1', imagePath: 'path/to/artwork1.jpg', description: 'Description 1', currentBid: 100 },
    { name: 'Artwork 2', imagePath: 'path/to/artwork2.jpg', description: 'Description 2', currentBid: 150 },
    // Add more items as needed
  ];

  selectedItem: AuctionItem | null = null;
  searchQuery: string = '';

  searchItems(): void {
    // Implement search logic
    // For simplicity, this example filters items based on the searchQuery
    this.items = [
      { name: 'Artwork 1', imagePath: 'path/to/artwork1.jpg', description: 'Description 1', currentBid: 100 },
      { name: 'Artwork 2', imagePath: 'path/to/artwork2.jpg', description: 'Description 2', currentBid: 150 },
      // Add more items as needed
    ].filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  viewItemDetails(item: AuctionItem): void {
    this.selectedItem = item;
  }

  placeBid(item: AuctionItem): void {
    // Implement bidding logic
    // For simplicity, let's increase the current bid by $10
    item.currentBid += 10;
  }

  modifyBid(item: AuctionItem): void {
    // Implement modify bid logic
    // For simplicity, let's allow the user to set a new bid amount
    const newBidAmount = parseFloat(prompt('Enter the new bid amount:') || '0');
    if (!isNaN(newBidAmount) && newBidAmount > item.currentBid) {
      item.currentBid = newBidAmount;
    } else {
      alert('Invalid bid amount. Please enter a higher bid.');
    }
  }

  buyPackage(): void {
    // Implement buy package logic (Stripe integration)
    // For simplicity, let's simulate a purchase with a fixed amount using Stripe
    const amount = 50; // The amount in dollars

    // Call your server to create a payment session or initiate a payment
    this.createStripePaymentSession(amount)
      .then(sessionId => {
        // Redirect to Stripe Checkout for payment
        this.redirectToStripeCheckout(sessionId);
      })
      .catch(error => {
        console.error('Error creating Stripe payment session:', error);
        alert('Error processing payment. Please try again.');
      });
  }

  private createStripePaymentSession(amount: number): Promise<string> {
    // Simulate server call to create a payment session with Stripe
    return new Promise<string>((resolve, reject) => {
      // In a real scenario, you would make an HTTP request to your server to create a Stripe Payment Session
      // Here, we're simulating it by using a timeout
      setTimeout(() => {
        // Assuming your server returns a Stripe Payment Session ID
        const sessionId = 'fake_stripe_session_id';
        resolve(sessionId);
      }, 1000);
    });
  }

  private redirectToStripeCheckout(sessionId: string): void {
    // Simulate redirect to Stripe Checkout
    // In a real scenario, you would redirect the user to the Checkout page provided by Stripe
    // Here, we're simulating it by logging the URL to the console
    console.log(`Redirect to Stripe Checkout: https://checkout.stripe.com/en-US/checkout/session/${sessionId}`);
    // In a real scenario, you would use window.location.href or a router navigate to redirect the user
  }

}

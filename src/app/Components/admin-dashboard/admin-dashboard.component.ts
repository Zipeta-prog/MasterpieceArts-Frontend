import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from '../user-management/user-management.component';
import { BidsManagementComponent } from '../bids-management/bids-management.component';
import { ProductManagementComponent } from '../product-management/product-management.component';
import { EmailManagementComponent } from '../email-management/email-management.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, UserManagementComponent, BidsManagementComponent, ProductManagementComponent, EmailManagementComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  // users: User[] = [];
  // products: Product[] = [];
  // categories: Category[] = [];
  // bids: Bid[] = [];

  // constructor(private adminService: AdminService) {}

showProductManagement() {
throw new Error('Method not implemented.');
}


selectedLink: any;
toggleMenu(link: string): void {
  this.selectedLink = link;
}


  manageUsers(): void {
    // Placeholder: Implement logic for managing users
    console.log('Managing Users');
  }

  manageProducts(): void {
    // Placeholder: Implement logic for managing products
    console.log('Managing Products');
  }

  manageCategories(): void {
    // Placeholder: Implement logic for managing categories
    console.log('Managing Categories');
  }

  // sendEmails(emailService: EmailService): void {
  //   // Placeholder: Implement logic for sending emails
  //   const emailData = {
  //     subject: 'Important Update',
  //     message: 'This is an important update for the auction.',
  //     recipients: ['seller1@example.com', 'bidder2@example.com']
  //   };
  //   emailService.sendEmail(emailData).subscribe(response => {
  //     console.log('Emails sent successfully:', response);
  //   });
  // }

  // manageBidding(biddingService: BiddingService): void {
  //   // Placeholder: Implement logic for managing bidding
  //   console.log('Managing Bidding');
  // }
}

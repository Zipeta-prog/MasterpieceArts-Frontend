import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserRole: string | null = null;

  constructor(private router: Router) { }

  // Set the current user role
  setUserRole(role: string): void {
    this.currentUserRole = role;
  }

  // Get the current user role
  getUserRole(): string | null {
    return this.currentUserRole;
  }

  // Redirect to the appropriate dashboard based on the user role
  redirectToDashboard(): void {
    const role = this.getUserRole();
    switch (role) {
      case 'seller':
        this.router.navigate(['/seller-dashboard']);
        break;
      case 'bidder':
        this.router.navigate(['/bidder-dashboard']);
        break;
      case 'admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      default:
        // Handle other roles or no role
        break;
    }
  }
}

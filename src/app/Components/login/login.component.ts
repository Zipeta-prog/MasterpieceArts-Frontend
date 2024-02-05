import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private authService: AuthService, private router: Router) {}

  // onSubmit(username: string, password: string, role: string) {
  //   // Authenticate user (use your authentication service)
  //   const isAuthenticated = this.authService.authenticate(username, password);

  //   if (isAuthenticated) {
  //     // Redirect based on role
  //     if (role === 'bidder') {
  //       // Set user role and navigate to bidder dashboard
  //       this.authService.setRole('bidder');
  //       this.router.navigate(['/bidder-dashboard']);
  //     } else if (role === 'seller') {
  //       // Set user role and navigate to seller dashboard
  //       this.authService.setRole('seller');
  //       this.router.navigate(['/seller-dashboard']);
  //     }
  //     // Add additional roles and redirects as needed
  //   } else {
  //     // Handle authentication failure
  //     alert('Invalid credentials. Please try again.');
  //   }
  // }
}

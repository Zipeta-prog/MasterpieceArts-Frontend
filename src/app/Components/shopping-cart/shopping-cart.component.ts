import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: CartItem[] = [];

  constructor(private router: Router) {}

  addToCart(item: ArtItem): void {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      currentBid: item.currentBid,
    };
    this.cartItems.push(cartItem);
  }

  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  checkout(): void {
    this.router.navigate(['/bidding']);
  }
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  description: string;
  currentBid: number;
}

interface ArtItem {
  id: number;
  name: string;
  image: string;
  description: string;
  currentBid: number;
}

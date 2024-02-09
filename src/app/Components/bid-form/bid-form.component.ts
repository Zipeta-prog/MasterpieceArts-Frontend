import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bid-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bid-form.component.html',
  styleUrl: './bid-form.component.css'
})
export class BidFormComponent {

}

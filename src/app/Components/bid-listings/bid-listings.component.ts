import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface  BidderStatistics{
  totals:number;
  label:string;
}

@Component({
  selector: 'app-bid-listings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bid-listings.component.html',
  styleUrl: './bid-listings.component.css'
})
export class BidListingsComponent implements OnInit {
  bidderStatistics: BidderStatistics[] = [];

  ngOnInit() {
    this.bidderStatistics=[
      {label:"won bids",totals:90},
      {label:"Lost bids",totals:10},
      {label:"Active bids",totals:5}
    ]

  }


}

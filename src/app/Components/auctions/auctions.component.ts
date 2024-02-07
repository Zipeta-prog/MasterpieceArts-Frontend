import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { Observable, of } from 'rxjs';

interface Auction {
  name: string;
  imagePath: string;
  year: number;
  startingPrice: number;
  endTime: Date;
}

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent],
  standalone: true,
})
export class AuctionsComponent implements OnInit {
formatDateWithTimeZone(arg0: Date) {
throw new Error('Method not implemented.');
}
  remainingTime: Observable<any> | undefined;

  constructor(private ngZone: NgZone) {}

  auctions: Auction[] = [
    { name: 'Artwork 1', imagePath: '../assets/Images/bentley.jpg', year: 2023, startingPrice: 100, endTime: new Date('2024-02-10T12:00:00Z') },
    { name: 'Artwork 2', imagePath: '../assets/Images/gallery.jpg', year: 2023, startingPrice: 150, endTime: new Date('2024-03-10T12:00:00Z') },
    { name: 'Artwork 3', imagePath: '../assets/Images/hydrangeas.jpg', year: 2023, startingPrice: 100, endTime: new Date('2024-04-10T12:00:00Z') },
    { name: 'Artwork 4', imagePath: '../assets/Images/Rectangle.png', year: 2023, startingPrice: 150, endTime: new Date('2024-05-10T12:00:00Z') },

  ];

  artsPerPage: number = 4;
  currentPage: number = 1;
  pages: number[] = [];

  get artsToShow(): Auction[] {
    const startIndex = (this.currentPage - 1) * this.artsPerPage;
    const endIndex = startIndex + this.artsPerPage;
    return this.auctions.slice(startIndex, endIndex);
  }

  ngOnInit(): void {
    this.calculatePages();
  }

  calculatePages(): void {
    const pageCount = Math.ceil(this.artsToShow.length / this.artsPerPage);
    this.pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  calculateRemainingTime(endTime: Date): Observable<string> {
    const now = new Date();
    const timeDifference = endTime.getTime() - now.getTime();

    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const remainingTime = `${hours}h ${minutes}m ${seconds}s`;
      return of(remainingTime);
    } else {
      return of('Bidding closed');
    }
  }

}


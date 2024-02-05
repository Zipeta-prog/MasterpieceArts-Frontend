import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Auction {
  name: string;
  imagePath: string;
  year: number;
  startingPrice: number;
  endTime: Date
}

@Component({
    selector: 'app-auctions',
    standalone: true,
    templateUrl: './auctions.component.html',
    styleUrls: ['./auctions.component.css'],
    imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent]
})
export class AuctionsComponent {

  remainingTime: Observable<string>;

  constructor(private ngZone: NgZone, private datePipe: DatePipe) {}
  auctions: Auction[] = [
    { name: 'Artwork 1', imagePath: '../assets/Images/bentley.jpg', year: 2023, startingPrice: 100, endTime: new Date('2024-02-10T12:00:00Z') },
    { name: 'Artwork 2', imagePath: '../assets/Images/gallery.jpg', year: 2023, startingPrice: 150, endTime: new Date('2024-03-10T12:00:00Z') },
    { name: 'Artwork 3', imagePath: '../assets/Images/hydrangeas.jpg', year: 2023, startingPrice: 100, endTime: new Date('2024-04-10T12:00:00Z') },
    { name: 'Artwork 4', imagePath: '../assets/Images/Rectangle.png', year: 2023, startingPrice: 150, endTime: new Date('2024-05-10T12:00:00Z') },
    // Add more art entries as needed
  ];

  artsPerPage: number = 4; // Number of arts to display per page
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


  // Create a method to format the date with time zone
  formatDateWithTimeZone(date: Date): string {
    return this.datePipe.transform(date, 'medium', 'UTC+0') || ''; // Ensure to return a string
  }
}

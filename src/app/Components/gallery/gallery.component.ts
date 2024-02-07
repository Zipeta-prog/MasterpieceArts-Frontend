import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Gallery {
  name: string;
  imagePath: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleries: Gallery[] = [];
  currentIndex: number = 0;

  private intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.galleries = [
      { name: 'Artwork 1', imagePath: '../assets/Images/bentley.jpg' },
      { name: 'Artwork 2', imagePath: '../assets/Images/gallery.jpg' },
      { name: 'Artwork 1', imagePath: '../assets/Images/hydrangeas.jpg' },
      { name: 'Artwork 1', imagePath: '../assets/Images/bentley.jpg' },
      { name: 'Artwork 2', imagePath: '../assets/Images/gallery.jpg' },
      { name: 'Artwork 1', imagePath: '../assets/Images/hydrangeas.jpg' },
      { name: 'Artwork 1', imagePath: '../assets/Images/bentley.jpg' },
      { name: 'Artwork 2', imagePath: '../assets/Images/gallery.jpg' },
      { name: 'Artwork 1', imagePath: '../assets/Images/hydrangeas.jpg' },

      // Add more artworks as needed
    ];

    this.intervalId = setInterval(() => this.moveCarousel(), 8000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  moveCarousel(): void {
    this.currentIndex = (this.currentIndex + 3) % this.galleries.length;
  }
}

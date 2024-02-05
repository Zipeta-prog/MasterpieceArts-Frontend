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
      { name: 'Artwork 1', imagePath: 'https://pixabay.com/photos/hydrangeas-wilted-flower-dry-flora-8519528/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },
      { name: 'Artwork 1', imagePath: 'https://pixabay.com/photos/hydrangeas-wilted-flower-dry-flora-8519528/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },
      { name: 'Artwork 1', imagePath: 'https://pixabay.com/photos/hydrangeas-wilted-flower-dry-flora-8519528/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },
      { name: 'Artwork 1', imagePath: 'https://pixabay.com/photos/hydrangeas-wilted-flower-dry-flora-8519528/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },
      { name: 'Artwork 1', imagePath: 'https://pixabay.com/photos/hydrangeas-wilted-flower-dry-flora-8519528/' },
      { name: 'Artwork 2', imagePath: 'https://pixabay.com/photos/dare-bentley-antique-car-automobile-7923106/' },

      // Add more artworks as needed
    ];

    this.intervalId = setInterval(() => this.moveCarousel(), 8000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  moveCarousel(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleries.length;
  }
}

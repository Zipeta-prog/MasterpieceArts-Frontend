import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HeaderComponent } from './Components/header/header.component';
import { CategorysearchComponent } from './Components/categorysearch/categorysearch.component';
import { AuctionsComponent } from './Components/auctions/auctions.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, NavigationComponent, HeaderComponent, CategorysearchComponent, AuctionsComponent, GalleryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MasterpieceArts';
}

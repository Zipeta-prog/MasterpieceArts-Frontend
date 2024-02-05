import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { CategorysearchComponent } from '../categorysearch/categorysearch.component';
import { HeaderComponent } from '../header/header.component';
import { AuctionsComponent } from '../auctions/auctions.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterModule, NavigationComponent, HeaderComponent, CategorysearchComponent, AuctionsComponent, GalleryComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor (private router:Router){}

  GotoAbout(){
    this.router.navigate(['/about'])
  }

}

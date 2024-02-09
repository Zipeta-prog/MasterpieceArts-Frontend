import { Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AboutComponent } from './Components/about/about.component';
import { AuctionsComponent } from './Components/auctions/auctions.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategorysearchComponent } from './Components/categorysearch/categorysearch.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { BiddingDetailsComponent } from './Components/bidding-details/bidding-details.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BidderDashboardComponent } from './Components/bidder-dashboard/bidder-dashboard.component';
import { SellerDashboardComponent } from './Components/seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BidsManagementComponent } from './Components/bids-management/bids-management.component';
import { UserManagementComponent } from './Components/user-management/user-management.component';
import { ProductManagementComponent } from './Components/product-management/product-management.component';
import { EmailManagementComponent } from './Components/email-management/email-management.component';
import { BidderProfileComponent } from './Components/bidder-profile/bidder-profile.component';
import { BidListingsComponent } from './Components/bid-listings/bid-listings.component';
import { BidFormComponent } from './Components/bid-form/bid-form.component';


export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'auctions', component:AuctionsComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'navigation', component:NavigationComponent},
  {path:'footer', component:FooterComponent},
  {path:'category', component:CategorysearchComponent},
  {path:'bidding-details', component:BiddingDetailsComponent},
  {path:'gallery', component:GalleryComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'bidder-dashboard', component: BidderDashboardComponent},
  {path:'seller-dashboard', component: SellerDashboardComponent},
  {path:'admin-dashboard', component: AdminDashboardComponent},
  {path:'bids-management', component: BidsManagementComponent},
  {path:'user-management', component: UserManagementComponent},
  {path:'product-management', component: ProductManagementComponent},
  {path:'email-management', component: EmailManagementComponent},
  {path:'bidding-details', component: BiddingDetailsComponent},
  {path:'bidder-dashboard', component:BidderDashboardComponent},
  {path:'bidder-profile', component:BidderProfileComponent},
  {path:'bid-listings', component:BidListingsComponent},
  {path:'bid-form',component:BidFormComponent}


];

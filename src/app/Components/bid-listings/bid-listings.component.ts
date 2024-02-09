import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface  BidderStatistics{
  id:number;
  totals:number;
  label:string;

}

interface Mybids{
  img_url:string;
  title:string;
  Id:number;
  Amount:number;
  Date:string;
  bidstatus:string;

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
  mybids: Mybids[] = [];
  filteredBids: Mybids[] = [];
  iscardActive="";


  getStatistics(status:string)
  {
    return this.mybids.filter(e=>e.bidstatus==status).length;
  }

  getFilteredBids(filter:string)
  {
    this.filteredBids= this.mybids.filter(e=>e.bidstatus==filter);
    this.iscardActive=filter;
  }



  ngOnInit() {
    this.bidderStatistics=[
      {label:"won",totals:90,id:1},
      {label:"lost",totals:10,id:2},
      {label:"active",totals:5,id:3}
    ]

    this.mybids=[
      {img_url:"image_url",title:"Monalisa",Id:56,Amount:300,Date:"Wed 2-2024",bidstatus:"won"},
      {img_url:"image_url",title:"Monalisa",Id:56,Amount:300,Date:"Wed 2-2024",bidstatus:"active"},
      {img_url:"image_url",title:"Monalisa",Id:56,Amount:300,Date:"Wed 2-2024",bidstatus:"lost"},
      {img_url:"image_url",title:"Monalisa",Id:56,Amount:300,Date:"Wed 2-2024",bidstatus:"won"},
      {img_url:"image_url",title:"Monalisa",Id:56,Amount:300,Date:"Wed 2-2024",bidstatus:"won"},

    ]
    this.filteredBids=this.mybids;



  }


}

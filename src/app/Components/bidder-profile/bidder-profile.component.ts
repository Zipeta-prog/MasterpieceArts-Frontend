import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BidderServiceService } from '../../Service/bidder-service.service';


@Component({
  selector: 'app-bidder-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bidder-profile.component.html',
  styleUrl: './bidder-profile.component.css'
})
export class BidderProfileComponent implements OnInit {
  bidderProfile: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(){
    this.bidderProfile = this.formBuilder.group({
      avatar: [''], // Add default values or validators if needed
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  onSaveChanges() {
    // Implement your save logic here
    console.log('Form submitted:', this.bidderProfile.value);
  }

}

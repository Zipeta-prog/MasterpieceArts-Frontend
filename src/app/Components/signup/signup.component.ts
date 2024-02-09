import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userService: UserService) {}

}

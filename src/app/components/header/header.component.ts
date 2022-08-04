import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {}

  login() {
    // navigate to login component page
    this.router.navigate(['/login/']);
  }
  navigateToHome() {
    // navigate to home component page on click of logo
    this.router.navigateByUrl('/home');
  }
}

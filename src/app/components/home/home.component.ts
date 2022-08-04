import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService, Result } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // variables
  topStories: Result[] = [];

  //flags
  showLoader: boolean = false;

  constructor(public homeService: HomeService, private router: Router) {}
  value = '';
  ngOnInit(): void {
    // Get top stories on page load
    this.showLoader = true;
    this.homeService.getTopStories().subscribe(
      (data) => {
        this.topStories = data.results;
        this.showLoader = false;
      },
      (error) => {
        alert('Failed to load Top Stories , Please refresh the page');
        console.log('Top stories API error', error.message);
        this.showLoader = false;
      }
    );
  }

  viewArticle(url: string, uri: string) {
    // view article on click of any article
    this.router.navigate(['/article-detail/', uri]);
  }
  searchArticle(value: string) {
    // navigate to articles search page on search of any keyword
    this.router.navigate([`/search/`, value]);
  }
}

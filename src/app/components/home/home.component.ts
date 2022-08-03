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

  constructor(public homeService: HomeService, private router: Router) {}
  value = '';
  ngOnInit(): void {
    this.homeService.getTopStories().subscribe((data) => {
      // console.log(data);
      this.topStories = data.results;
      // console.log('Top stories API DATA', this.topStories);
    });
  }

  viewArticle(url: string, uri: string) {
    this.router.navigate(['/article-detail/', uri]);
  }
  searchArticle(value: string) {
    this.router.navigate([`/search/`, value]);
  }
}

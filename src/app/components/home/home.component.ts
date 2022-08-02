import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService, Result } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // https://api.nytimes.com/svc/topstories/v2/home.json?api-key=iGE3e1cqW5GI6LPlcI1xOQiIHF1awGNm

  // variables
  topStories: Result[] = [];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  //

  constructor(public homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService.getTopStories().subscribe((data) => {
      console.log(data);
      this.topStories = data.results;
      console.log('Top stories API DATA', this.topStories);
    });
  }

  viewArticle(url: string, uri: string) {
    // window.location.href = uri;
    // window.open(uri);
    // this.homeService.getUri().subscribe((data) => console.log(data));
    this.router.navigate(['/article-detail/', uri]);
  }
}

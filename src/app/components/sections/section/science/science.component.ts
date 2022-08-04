import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/components/services/home.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  // variables
  topStories: any[] = [];

  //

  constructor(public homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    // get top stories corresponding to category --  science
    this.homeService.getSectionCategoryStories('science').subscribe(
      (d: any) => {
        console.log('world data', d);
        console.log(d.results);
        this.topStories = d.results;
        console.log(Object.entries(d));
        console.log('Top stories API DATA', this.topStories);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  viewArticle(url: string, uri: string) {
    // on tap of a story
    this.router.navigate(['/article-detail/', uri]);
  }
}

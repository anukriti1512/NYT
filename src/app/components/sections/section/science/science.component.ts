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
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;

  //

  constructor(public homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService
      .getSectionCategoryStories('science')
      .subscribe((d: any) => {
        console.log('world data', d);
        console.log(d.results);
        this.topStories = d.results;
        console.log(Object.entries(d));
        console.log('Top stories API DATA', this.topStories);
      });
  }

  viewArticle(url: string, uri: string) {
    this.router.navigate(['/article-detail/', uri]);
  }
}

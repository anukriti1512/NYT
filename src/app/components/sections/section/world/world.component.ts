import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/components/services/home.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  // variables
  topStories: any[] = [];

  //

  constructor(public homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    // get top stories corresponding to category --  world
    this.homeService.getSectionCategoryStories('world').subscribe(
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
    this.router.navigate(['/article-detail/', uri]);
  }
}

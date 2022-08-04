import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-landing-page',
  templateUrl: './section-landing-page.component.html',
  styleUrls: ['./section-landing-page.component.css'],
})
export class SectionLandingPageComponent implements OnInit {
  constructor(private Activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // get search param from the url
    let url = this.router.url;
    let urlArray = url.split('/');
    let category = urlArray[url.length - 1];
    if (urlArray[urlArray.length - 1] === 'section') {
      // if no section category is  specified then navigate to home page
      this.router.navigate(['/home']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { PageEvent } from '@angular/material/paginator';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
})
export class SearchScreenComponent implements OnInit {
  value = '';

  // MatPaginator Output
  pageEvent!: PageEvent;

  // MatPaginator Inputs
  length: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];
  articles: any[] = [];
  pageIndex: number = 0;
  searchKeyword: any;
  page: any;

  //flags
  showContent: boolean = false;
  showLoader: boolean = true;

  constructor(
    private articleDetailsService: ArticleService,
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // subscriubing to the location service
    this.showLoader = true;
    this.location.subscribe((event) => {
      // event is fired on click of forward and back browser button
      let url: any = event.url?.split('/'); // split URL to read values from  it
      let length: any = url?.length;
      this.searchKeyword = url[length - 1]; // get the search param
      this.value = this.searchKeyword; // set value to the inout box
      this.getPageArticlesData(0, this.searchKeyword); // get data based on the values
    });

    // on load of page
    this.getDetailsFromUrl();
  }

  getDetailsFromUrl() {
    // get search param from the url
    this.Activatedroute.paramMap.subscribe((params) => {
      this.searchKeyword = params.get('query');
    });

    this.value = this.searchKeyword; // set value to the input field
    this.getPageArticlesData(0, this.searchKeyword);
  }

  // get page articles data bsed on the page number and keyword
  getPageArticlesData(pageNumber: number, searchKeyword: string) {
    this.pageIndex = pageNumber;

    // getting data via API call
    this.showLoader = true;
    this.articleDetailsService
      .getSearchQueryArticles(this.searchKeyword, pageNumber)
      .subscribe(
        (data: any) => {
          this.articles = data.response.docs;
          this.length = data.response.meta.hits;
          this.showContent = true;
          this.showLoader = false;
        },
        (err) => {
          console.log('error encountered', err.error.fault.faultstring);
          alert(
            'Error encountered in fetching details - ' +
              err.error.fault.faultstring
          );
          this.showLoader = false;
        }
      );
  }

  // event fired when page is navigated in paginator
  getPageEvent(e: any) {
    this.getPageArticlesData(e.pageIndex, this.searchKeyword);
  }

  articleDetails(uri: string) {
    // navigate to article details page to view the detailed article
    this.router.navigate(['/article-detail/', uri]);
  }

  // function called on click of search btn
  searchQuery(value: string) {
    this.router.navigate(['/search/', value]); // change in URL
    this.searchKeyword = value;
    this.getPageArticlesData(0, this.searchKeyword);
  }
}

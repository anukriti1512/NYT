import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  articleDetailsData: any;
  uri: any;

  constructor(
    private articleDetailsService: ArticleService,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((params) => {
      //  console.log();
      this.uri = params.get('uri');
    });

    this.articleDetailsService.getArticleDetails(this.uri).subscribe((data) => {
      console.log(
        'article details api data using web url',
        data.response.docs[0]
      );
      console.log(Object.entries(data));
      // this.articleDetailsData = data['response'].docs;
      this.articleDetailsData = data.response.docs[0];
    });
  }
}

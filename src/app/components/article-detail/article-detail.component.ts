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
    // get uri from the URL
    this.Activatedroute.paramMap.subscribe((params) => {
      this.uri = params.get('uri');
    });

    //getting article details by using article search API
    this.articleDetailsService.getArticleDetails(this.uri).subscribe((data) => {
      this.articleDetailsData = data.response.docs[0];
    });
  }
}

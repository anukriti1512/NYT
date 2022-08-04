import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.css'],
})
export class ArticleCommentsComponent implements OnInit {
  //flags
  errorFlag: boolean = false;
  showLoader: boolean = false;

  // variables
  @Input() uri: any;
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    console.log('uri from child', this.uri);
    this.getArticleComments();
  }

  getArticleComments() {
    // API provided for loading comments doesn't exist anymore on the official website.
    this.showLoader = true;
    this.errorFlag = false;
    this.articleService.getArticleComments().subscribe(
      (data) => {
        console.log(data);
        this.showLoader = false;
      },
      (error) => {
        console.log('error', error.message);
        alert('Failed to load comments !');
        this.errorFlag = true;
        this.showLoader = false;
      }
    );
  }
}

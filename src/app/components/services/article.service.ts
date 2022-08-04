import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  API_Key: string = 'iGE3e1cqW5GI6LPlcI1xOQiIHF1awGNm';
  API_URL: string = 'https://api.nytimes.com/svc/search/v2/';

  constructor(private http: HttpClient) {}

  // get article details when tapping on an specified article
  getArticleDetails(articleURI: string) {
    return this.http.get<any>(
      this.API_URL +
        `articlesearch.json?fq=_id:("${articleURI}")&api-key=${this.API_Key}`
    );
  }

  // get stories based on the search keyword
  getSearchQueryArticles(query: string, pageNumber: number) {
    return this.http.get(
      this.API_URL +
        `articlesearch.json?q=${query}&page=${pageNumber}&api-key=${this.API_Key}`
    );
  }

  // get comments corresponding to an article

  getArticleComments() {
    // this article comments API doesn't exist anymore on the offcial website of newyork times page
    return this.http.get(
      'https://developer.nytimes.com/docs/community-api-product/1/overview '
    );
  }
}

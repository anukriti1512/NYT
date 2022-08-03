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

  getArticleDetails(articleURI: string) {
    return this.http.get<any>(
      this.API_URL +
        `articlesearch.json?fq=_id:("${articleURI}")&api-key=${this.API_Key}`
    );
  }

  getSearchQueryArticles(query: string, pageNumber: number) {
    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=iGE3e1cqW5GI6LPlcI1xOQiIHF1awGNm

    // for pagination
    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&page=1&api-key=iGE3e1cqW5GI6LPlcI1xOQiIHF1awGNm

    return this.http.get(
      this.API_URL +
        `articlesearch.json?q=${query}&page=${pageNumber}&api-key=${this.API_Key}`
    );

    // return this.http.get(
    //   this.API_URL + `articlesearch.json?q=${query}&api-key=${this.API_Key}`
    // );
  }
}

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
}

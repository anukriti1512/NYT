import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTopStories(): Observable<topStories> {
    return this.http.get<topStories>(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=iGE3e1cqW5GI6LPlcI1xOQiIHF1awGNm'
    );
  }
}

// All interfaces

// top story interface
export interface topStories {
  status: string;
  copyright: string;
  section: string;
  last_updated: Date;
  num_results: number;
  results: Result[];
}

export interface Result {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: ItemType;
  updated_date: Date;
  created_date: Date;
  published_date: Date;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedia[];
  short_url: string;
}

export enum ItemType {
  Article = 'Article',
  Interactive = 'Interactive',
}

export interface Multimedia {
  url: string;
  format: Format;
  height: number;
  width: number;
  type: Type;
  subtype: Subtype;
  caption: string;
  copyright: string;
}

export enum Format {
  LargeThumbnail = 'Large Thumbnail',
  SuperJumbo = 'Super Jumbo',
  ThreeByTwoSmallAt2X = 'threeByTwoSmallAt2X',
}

export enum Subtype {
  Photo = 'photo',
}

export enum Type {
  Image = 'image',
}

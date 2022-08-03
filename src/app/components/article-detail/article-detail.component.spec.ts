import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticleDetailComponent } from './article-detail.component';
import { RouterModule } from '@angular/router';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleDetailComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

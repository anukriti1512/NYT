import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchScreenComponent } from './search-screen.component';

describe('SearchScreenComponent', () => {
  let component: SearchScreenComponent;
  let fixture: ComponentFixture<SearchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchScreenComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

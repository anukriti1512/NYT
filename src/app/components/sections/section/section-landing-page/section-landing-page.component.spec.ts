import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLandingPageComponent } from './section-landing-page.component';

describe('SectionLandingPageComponent', () => {
  let component: SectionLandingPageComponent;
  let fixture: ComponentFixture<SectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

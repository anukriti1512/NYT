import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScienceComponent } from './science.component';

describe('ScienceComponent', () => {
  let component: ScienceComponent;
  let fixture: ComponentFixture<ScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScienceComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

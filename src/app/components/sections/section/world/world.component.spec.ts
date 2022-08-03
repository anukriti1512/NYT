import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorldComponent } from './world.component';

describe('WorldComponent', () => {
  let component: WorldComponent;
  let fixture: ComponentFixture<WorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorldComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

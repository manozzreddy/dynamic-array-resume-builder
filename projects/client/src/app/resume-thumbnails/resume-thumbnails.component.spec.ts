import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeThumbnailsComponent } from './resume-thumbnails.component';

describe('ResumeThumbnailsComponent', () => {
  let component: ResumeThumbnailsComponent;
  let fixture: ComponentFixture<ResumeThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeThumbnailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

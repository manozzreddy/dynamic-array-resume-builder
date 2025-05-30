import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoFormComponent } from './upload-photo-form.component';

describe('UploadPhotoFormComponent', () => {
  let component: UploadPhotoFormComponent;
  let fixture: ComponentFixture<UploadPhotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPhotoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesFormComponent } from './languages-form.component';

describe('LanguagesFormComponent', () => {
  let component: LanguagesFormComponent;
  let fixture: ComponentFixture<LanguagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSummaryFormComponent } from './professional-summary-form.component';

describe('ProfessionalSummaryFormComponent', () => {
  let component: ProfessionalSummaryFormComponent;
  let fixture: ComponentFixture<ProfessionalSummaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalSummaryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSummaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

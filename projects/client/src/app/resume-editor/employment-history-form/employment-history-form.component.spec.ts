import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHistoryFormComponent } from './employment-history-form.component';

describe('EmploymentHistoryFormComponent', () => {
  let component: EmploymentHistoryFormComponent;
  let fixture: ComponentFixture<EmploymentHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentHistoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

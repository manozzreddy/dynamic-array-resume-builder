import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearPickerComponent } from './month-year-picker.component';

describe('MonthYearPickerComponent', () => {
  let component: MonthYearPickerComponent;
  let fixture: ComponentFixture<MonthYearPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthYearPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

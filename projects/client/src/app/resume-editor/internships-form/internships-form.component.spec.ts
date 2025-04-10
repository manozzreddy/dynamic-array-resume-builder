import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsFormComponent } from './internships-form.component';

describe('InternshipsFormComponent', () => {
  let component: InternshipsFormComponent;
  let fixture: ComponentFixture<InternshipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

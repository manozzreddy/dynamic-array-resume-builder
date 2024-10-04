import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorProfileComponent } from './contributor-profile.component';

describe('ContributorProfileComponent', () => {
  let component: ContributorProfileComponent;
  let fixture: ComponentFixture<ContributorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

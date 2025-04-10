import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCardComponent } from './create-new-card.component';

describe('CreateNewCardComponent', () => {
  let component: CreateNewCardComponent;
  let fixture: ComponentFixture<CreateNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

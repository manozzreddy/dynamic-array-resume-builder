import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableAccordionPanelComponent } from './sortable-accordion-panel.component';

describe('SortableAccordionPanelComponent', () => {
  let component: SortableAccordionPanelComponent;
  let fixture: ComponentFixture<SortableAccordionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortableAccordionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

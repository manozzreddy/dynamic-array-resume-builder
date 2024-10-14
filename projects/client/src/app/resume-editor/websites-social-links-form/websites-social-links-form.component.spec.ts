import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesSocialLinksFormComponent } from './websites-social-links-form.component';

describe('WebsitesSocialLinksFormComponent', () => {
  let component: WebsitesSocialLinksFormComponent;
  let fixture: ComponentFixture<WebsitesSocialLinksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsitesSocialLinksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitesSocialLinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

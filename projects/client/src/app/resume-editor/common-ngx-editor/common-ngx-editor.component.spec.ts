import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNgxEditorComponent } from './common-ngx-editor.component';

describe('CommonNgxEditorComponent', () => {
  let component: CommonNgxEditorComponent;
  let fixture: ComponentFixture<CommonNgxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonNgxEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonNgxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

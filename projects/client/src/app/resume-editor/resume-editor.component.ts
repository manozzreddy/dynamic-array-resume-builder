import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { ProfessionalSummaryFormComponent } from './professional-summary-form/professional-summary-form.component';
import { EmploymentHistoryFormComponent } from './employment-history-form/employment-history-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { WebsitesSocialLinksFormComponent } from './websites-social-links-form/websites-social-links-form.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ResumeData } from '../../../../../libs/shared-types/src';

@Component({
  selector: 'app-resume-editor',
  standalone: true,
  imports: [
    ToolbarComponent,
    PersonalDetailsFormComponent,
    ProfessionalSummaryFormComponent,
    EmploymentHistoryFormComponent,
    EducationFormComponent,
    ResumePreviewComponent,
    SkillsFormComponent,
    WebsitesSocialLinksFormComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './resume-editor.component.html',
  styleUrl: './resume-editor.component.scss',
})
export class ResumeEditorComponent implements OnInit, OnDestroy {
  resumeForm: FormGroup;
  formDataChangesSubscription?: Subscription;
  resumeCrafterWindow: Window | null | undefined;

  constructor() {
    this.resumeForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.formDataChangesSubscription = this.resumeForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
        
        this.getResumeCrafterWindow?.postMessage(
          value as ResumeData,
          'https://dynamic-array-resume-crafter.web.app/'
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.formDataChangesSubscription?.unsubscribe();
  }

  get getResumeCrafterWindow() {
    if (!this.resumeCrafterWindow) {
      const iframe = document.querySelector('iframe');

      this.resumeCrafterWindow = iframe?.contentWindow;
    }

    return this.resumeCrafterWindow;
  }

  subFormControlReady($event: FormControlReadyEvent) {
    this.resumeForm.addControl($event.name, $event.form);
  }
}

export interface FormControlReadyEvent {
  name: string;
  form: FormGroup | FormControl<string | null> |  FormArray<any>;
}

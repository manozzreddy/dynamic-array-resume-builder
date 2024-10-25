import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { Moment } from 'moment';
import _ from 'lodash';
import { MatRippleModule } from '@angular/material/core';
import { CertificationsFormComponent } from './certifications-form/certifications-form.component';
import { HobbiesFormComponent } from './hobbies-form/hobbies-form.component';
import { InternshipsFormComponent } from './internships-form/internships-form.component';
import { ReferencesFormComponent } from './references-form/references-form.component';
import { LanguagesFormComponent } from './languages-form/languages-form.component';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../services/resume/resume.service';

@Component({
  selector: 'app-resume-editor',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    PersonalDetailsFormComponent,
    ProfessionalSummaryFormComponent,
    EmploymentHistoryFormComponent,
    EducationFormComponent,
    ResumePreviewComponent,
    SkillsFormComponent,
    WebsitesSocialLinksFormComponent,
    ReactiveFormsModule,
    MatRippleModule,
    CertificationsFormComponent,
    HobbiesFormComponent,
    InternshipsFormComponent,
    ReferencesFormComponent,
    LanguagesFormComponent,
  ],
  templateUrl: './resume-editor.component.html',
  styleUrl: './resume-editor.component.scss',
  providers : [
    ResumeService,
  ]
})
export class ResumeEditorComponent implements OnInit, OnDestroy {
  resumeForm: FormGroup = new FormGroup({});
  formDataChangesSubscription?: Subscription;
  resumeCrafterWindow?: Window | null;

  sections = [
    {
      name: 'Languages',
      formName: 'languages',
      image: 'assets/images/languages.png',
      isAdded: false,
    },
    {
      name: 'Certifications',
      formName: 'certifications',
      image: 'assets/images/certifications.png',
      isAdded: false,
    },
    {
      name: 'Hobbies',
      formName: 'hobbies',
      image: 'assets/images/hobbies.png',
      isAdded: false,
    },
    {
      name: 'Internships',
      formName: 'internships',
      image: 'assets/images/internships.png',
      isAdded: false,
    },
  ];

  resumeData?: ResumeData;

  private readonly resumeService = inject(ResumeService);

  constructor() {}

  ngOnInit(): void {
    this.formDataChangesSubscription = this.resumeForm.valueChanges.subscribe(
      (value) => {
        let resumeData = _.cloneDeep(value);

        console.log(resumeData);

        /// TODO(Manoj): Refactor this portion.
        for (let index in resumeData['experience']) {
          let experience = resumeData['experience'][index];
          let startDate = experience.startDate;
          let endDate = experience.endDate;

          if (startDate) {
            resumeData['experience'][index]['startDate'] = (
              startDate as Moment
            ).toISOString();
          }

          if (endDate) {
            resumeData['experience'][index]['endDate'] = (
              endDate as Moment
            ).toISOString();
          }
        }

        for (let index in resumeData['education']) {
          let education = resumeData['education'][index];
          let startDate = education.startDate;
          let endDate = education.endDate;

          if (startDate) {
            resumeData['education'][index]['startDate'] = (
              startDate as Moment
            ).toISOString();
          }

          if (endDate) {
            resumeData['education'][index]['endDate'] = (
              endDate as Moment
            ).toISOString();
          }
        }

        this.resumeData = resumeData as ResumeData;

        console.log(JSON.stringify(this.resumeData));

        this.getResumeCrafterWindow?.postMessage(
          this.resumeData,
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

  toggleSection(index: number) {
    this.sections[index].isAdded = !this.sections[index].isAdded;
  }

  async download() {
    if (this.resumeData) {
      this.resumeService.download(this.resumeData);
    }
  }
}

export interface FormControlReadyEvent {
  name: string;
  form: FormGroup | FormControl<any> | FormArray<any>;
}

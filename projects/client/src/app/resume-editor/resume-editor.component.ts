import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { ProfessionalSummaryFormComponent } from './professional-summary-form/professional-summary-form.component';
import { EmploymentHistoryFormComponent } from './employment-history-form/employment-history-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { WebsitesSocialLinksFormComponent } from './websites-social-links-form/websites-social-links-form.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.resumeForm = new FormGroup({
      fullName: new FormControl('John Doe', [Validators.required]),
      phoneNumber: new FormControl('9999999999', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      email: new FormControl('yourmail@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      location: new FormControl('Bengaluru', [Validators.required]),
      professionalSummary: new FormControl(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        [Validators.required]
      ),
      experience: new FormArray([
        new FormGroup({
          company: new FormControl('Tech Solutions Ltd', [Validators.required]),
          role: new FormControl('Senior UX Developer', [Validators.required]),
          startDate: new FormControl('April 2024', [Validators.required]),
          endDate: new FormControl('Present', [Validators.required]),
          responsibilities: new FormArray([
            new FormControl(
              'Monitored emerging UX design trends and practices for useful techniques and cutting-edge developments suitable for integration into future projects.'
            ),
            new FormControl(
              'Maximized system performance, enhancing end-user experience by applying iterative back-end development updates.'
            ),
            new FormControl(
              'Collaborated with Test Automation Engineers to produce rapid UX iteration via automated diagnostics.'
            ),
          ]),
        }),
        new FormGroup({
          company: new FormControl('Innovative Design Co.', [
            Validators.required,
          ]),
          role: new FormControl('Frontend Developer', [Validators.required]),
          startDate: new FormControl('March 2023', [Validators.required]),
          endDate: new FormControl('April 2024', [Validators.required]),
          responsibilities: new FormArray([
            new FormControl(
              'Developed user-focused web applications using modern front-end frameworks such as React and Angular.'
            ),
            new FormControl(
              'Led the front-end team in the design and execution of user interface components.'
            ),
            new FormControl(
              'Worked closely with the design team to implement responsive layouts and user-friendly interactions.'
            ),
          ]),
        }),
      ]),
      education: new FormArray([
        new FormGroup({
          institution: new FormControl('ABC University', [Validators.required]),
          degree: new FormControl('Bachelor of Science in Computer Science', [
            Validators.required,
          ]),
          startDate: new FormControl('2015', [Validators.required]),
          endDate: new FormControl('2019', [Validators.required]),
        }),
        new FormGroup({
          institution: new FormControl('XYZ High School', [
            Validators.required,
          ]),
          degree: new FormControl('High School Diploma', [Validators.required]),
          startDate: new FormControl('2013', [Validators.required]),
          endDate: new FormControl('2015', [Validators.required]),
        }),
      ]),
      certifications: new FormArray([
        new FormControl('Certified UX Designer'),
        new FormControl('AWS Certified Solutions Architect'),
      ]),
      technicalSkills: new FormArray([
        new FormControl('JavaScript'),
        new FormControl('TypeScript'),
        new FormControl('React'),
        new FormControl('Angular'),
        new FormControl('Node.js'),
        new FormControl('HTML5'),
        new FormControl('CSS3'),
        new FormControl('Sass'),
        new FormControl('Git'),
        new FormControl('REST APIs'),
        new FormControl('GraphQL'),
        new FormControl('Firebase'),
        new FormControl('MySQL'),
        new FormControl('MongoDB'),
        new FormControl('AWS'),
      ]),
      languages: new FormArray([
        new FormControl('English (Fluent)'),
        new FormControl('Hindi (Native)'),
        new FormControl('Spanish (Intermediate)'),
      ]),
    });
  }

  ngOnInit(): void {
    this.formDataChangesSubscription = this.resumeForm.valueChanges.subscribe(
      (value) => {
        const iframe = document.querySelector('iframe');

        this.resumeCrafterWindow = iframe?.contentWindow;
        this.resumeCrafterWindow?.postMessage(
          value as ResumeData,
          'https://dynamic-array-resume-crafter.web.app/'
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.formDataChangesSubscription?.unsubscribe();
  }
}

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeData } from '../../../../libs/shared-types/src';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  zoom: number = 1;

  resumeCrafterWindow: Window | null | undefined;
  resumeForm: FormGroup;
  formDataChangesSubscription?: Subscription;
  private functions: Functions = inject(Functions);

  resumeData: ResumeData = {
    fullName: 'John Doe',
    phoneNumber: '9999999999',
    email: 'yourmail@gmail.com',
    location: 'Bengaluru',
    professionalSummary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    experience: [
      {
        company: 'Tech Solutions Ltd',
        role: 'Senior UX Developer',
        startDate: 'April 2024',
        endDate: 'Present',
        responsibilities: [
          'Monitored emerging UX design trends and practices for useful techniques and cutting-edge developments suitable for integration into future projects.',
          'Maximized system performance, enhancing end-user experience by applying iterative back-end development updates.',
          'Collaborated with Test Automation Engineers to produce rapid UX iteration via automated diagnostics.',
        ],
      },
      {
        company: 'Innovative Design Co.',
        role: 'Frontend Developer',
        startDate: 'March 2023',
        endDate: 'April 2024',
        responsibilities: [
          'Developed user-focused web applications using modern front-end frameworks such as React and Angular.',
          'Led the front-end team in the design and execution of user interface components.',
          'Worked closely with the design team to implement responsive layouts and user-friendly interactions.',
        ],
      },
    ],
    education: [
      {
        institution: 'ABC University',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '2015',
        endDate: '2019',
      },
      {
        institution: 'XYZ High School',
        degree: 'High School Diploma',
        startDate: '2013',
        endDate: '2015',
      },
    ],

    certifications: [
      'Certified UX Designer',
      'AWS Certified Solutions Architect',
    ],
    technicalSkills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Node.js',
      'HTML5',
      'CSS3',
      'Sass',
      'Git',
      'REST APIs',
      'GraphQL',
      'Firebase',
      'MySQL',
      'MongoDB',
      'AWS',
    ],
    languages: ['English (Fluent)', 'Hindi (Native)', 'Spanish (Intermediate)'],
  };

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

  ngOnDestroy(): void {
    this.formDataChangesSubscription?.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    const iframe = document.querySelector('iframe');

    this.resumeCrafterWindow = iframe?.contentWindow;

    this.formDataChangesSubscription = this.resumeForm.valueChanges.subscribe(
      (value) => {
        this.resumeCrafterWindow?.postMessage(
          value as ResumeData,
          'https://dynamic-array-resume-crafter.web.app/'
        );
      }
    );

    const callable = httpsCallable(this.functions,'generateResume');

    await callable({});
  }

  get experience(): FormArray {
    return this.resumeForm.get('experience') as FormArray;
  }

  get education(): FormArray {
    return this.resumeForm.get('education') as FormArray;
  }

  get certifications(): FormArray {
    return this.resumeForm.get('certifications') as FormArray;
  }

  get technicalSkills(): FormArray {
    return this.resumeForm.get('technicalSkills') as FormArray;
  }

  get languages(): FormArray {
    return this.resumeForm.get('languages') as FormArray;
  }

  zoomOut() {
    this.zoom += 0.1;
  }
  
  zoomIn() {
    if (this.zoom > 0.1) {
      this.zoom -= 0.1;
    }
  }
}

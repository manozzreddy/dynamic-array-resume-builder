import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicTemplateComponent } from './basic-template/basic-template.component';
import { ResumeData } from '../../../../libs/shared-types/src';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'resume-crafter';

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

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      // Client App origin
      this.resumeData = event.data as ResumeData;
      // Handle the received resume data
    });
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResumeThumbnailsComponent } from '../resume-thumbnails/resume-thumbnails.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ResumeThumbnailsComponent,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = [
    {
      image: 'assets/images/pick-a-template.png',
      title: 'Pick a template',
      subtitle:
        'Choose a design and layout that matches your skill set to get started',
    },
    {
      image: 'assets/images/customize-your-document.png',
      title: 'Customize your document',
      subtitle: 'Give your document a professional and elegant look.',
    },
    {
      image: 'assets/images/hit-download.png',
      title: 'Hit download',
      subtitle: 'Download your resume, apply, get more interviews.',
    },
  ];

  whyChooseUsTiles = [
    {
      image: 'assets/images/free-of-charges.png',
      title: 'Free of Charges',
      subtitle:
        'A free & leveraging open source resume building platform that empowers individuals without barriers',
    },
    {
      image: 'assets/images/easy-to-use.png',
      title: 'Easy to use',
      subtitle:
        'The process of writing a resume is substantially sped up and simplified by using our resume builder.',
    },
    {
      image: 'assets/images/data-is-safe.png',
      title: 'Your data is safe',
      subtitle:
        'We respect your privacy & give you control over your content and your data with us.',
    },
    {
      image: 'assets/images/cool-templates.png',
      title: 'Cool Templates',
      subtitle:
        'Our template designs help your resume standout in a pool of others.',
    },
   
    {
      image: 'assets/images/intelligent-design.png',
      title: 'Intelligent Design',
      subtitle:
        "With us, you won't have to bother about the minute details of resume development, such as font choice, layout, etc.",
    },    
    {
      image: 'assets/images/ats-friendly.png',
      title: 'HR-Approved & ATS-Friendly',
      subtitle:
        'Professionally-designed resume templates and examples. Just edit and download in 5 minutes.',
    },    
    {
      image: 'assets/images/optimized-resumes.png',
      title: 'Optimized resumes',
      subtitle:
        'Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application.',
    },

    {
      image: 'assets/images/multi-format-resume-options.png',
      title: 'Multi-format resume options',
      subtitle:
        'Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.',
    },

    {
      image: 'assets/images/cover-letters.png',
      title: 'Cover letters',
      subtitle:
        'Our cover letter builder works with the same ease and use of elegant templates as the resume creator.',
    },
  ];
}

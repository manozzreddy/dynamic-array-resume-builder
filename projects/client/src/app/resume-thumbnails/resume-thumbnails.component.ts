import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-thumbnails',
  standalone: true,
  imports: [],
  templateUrl: './resume-thumbnails.component.html',
  styleUrl: './resume-thumbnails.component.scss',
})
export class ResumeThumbnailsComponent {
  images = [
    'https://d.novoresume.com/images/doc/creative-resume-template.png',
    'https://d.novoresume.com/images/doc/basic-resume-template.png',
    'https://d.novoresume.com/images/doc/combined-resume-template.png',
    'https://d.novoresume.com/images/doc/minimalist-resume-template.png',
    'https://d.novoresume.com/images/doc/hybrid-resume-template.png',
    'https://d.novoresume.com/images/doc/hybrid-resume-template.png',
    'https://d.novoresume.com/images/doc/traditional-resume-template.png',
    'https://d.novoresume.com/images/doc/general-resume-template.png',
  ];
}

import { Component, Input } from '@angular/core';
import { ResumeData } from '../../../../../libs/shared-types/src';

@Component({
  selector: 'app-basic-template',
  standalone: true,
  imports: [],
  templateUrl: './basic-template.component.html',
  styleUrl: './basic-template.component.scss',
})
export class BasicTemplateComponent {
  @Input() resumeData: ResumeData | null | undefined; 
}

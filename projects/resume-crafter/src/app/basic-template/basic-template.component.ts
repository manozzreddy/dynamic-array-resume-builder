import { Component, Input } from '@angular/core';
import { ResumeData } from '../../../../../libs/shared-types/src';
import { SafeHtmlPipe } from '../../../../client/src/app/pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'app-basic-template',
  standalone: true,
  imports: [
    SafeHtmlPipe 
  ],
  templateUrl: './basic-template.component.html',
  styleUrl: './basic-template.component.scss',
})
export class BasicTemplateComponent {
  @Input() resumeData: ResumeData | null | undefined; 
}

import { Component, input } from '@angular/core';
import { ResumeData } from '../../../../../libs/shared-types/src';
import { SafeHtmlPipe } from '../../../../client/src/app/pipes/safe-html/safe-html.pipe';
import { FormatDatePipe } from '../pipes/format-date/format-date.pipe';

@Component({
  selector: 'app-basic-template',
  standalone: true,
  imports: [SafeHtmlPipe, FormatDatePipe],
  templateUrl: './basic-template.component.html',
  styleUrl: './basic-template.component.scss',
})
export class BasicTemplateComponent {
  resumeData = input<ResumeData | null | undefined>();
}

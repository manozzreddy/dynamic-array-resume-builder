import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  private readonly _sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {}

  transform(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }
}

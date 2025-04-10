import { Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResumeService } from '../../services/resume/resume.service';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule,
    CommonModule,
    MatProgressBarModule,
  ],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.scss',
})
export class ResumePreviewComponent {
  downloadResume = output();
  private readonly resumeService = inject(ResumeService);
  
  isDownloadInProgress$ = this.resumeService.isDownloadInProgress$;

  download() {
    this.downloadResume.emit();
  }
}

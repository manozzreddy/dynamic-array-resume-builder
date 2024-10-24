import { Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Functions, httpsCallableFromURL } from '@angular/fire/functions';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.scss',
})
export class ResumePreviewComponent {
  downloadResume = output();

  download() {
    this.downloadResume.emit();
  }
}

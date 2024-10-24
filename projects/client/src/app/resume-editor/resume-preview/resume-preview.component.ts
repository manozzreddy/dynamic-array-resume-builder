import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  Functions,
  httpsCallable,
  httpsCallableFromURL,
} from '@angular/fire/functions';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.scss',
})
export class ResumePreviewComponent {
  private readonly functions: Functions = inject(Functions);
  async download() {
    const callable = httpsCallableFromURL(
      this.functions,
      'https://us-central1-dynamic-array-resume-builder.cloudfunctions.net/generateResume'
    );

    let pdf = await callable();

    console.log(pdf.data);
  }
}

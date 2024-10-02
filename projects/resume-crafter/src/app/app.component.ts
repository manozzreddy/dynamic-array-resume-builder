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
  resumeData?: ResumeData;

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      // Client App origin
      this.resumeData = event.data as ResumeData;
      // Handle the received resume data
    });
  }
}

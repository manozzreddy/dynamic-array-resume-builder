import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'resume-crafter';

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      // Client App origin
      const resumeData = event.data;
      console.log('resumeData', resumeData);
      // Handle the received resume data
    });
  }
}

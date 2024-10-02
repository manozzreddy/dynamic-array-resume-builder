import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResumeThumbnailsComponent } from '../resume-thumbnails/resume-thumbnails.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ResumeThumbnailsComponent,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

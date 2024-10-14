import { Component, input, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contributor-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contributor-profile.component.html',
  styleUrl: './contributor-profile.component.scss',
})
export class ContributorProfileComponent {
  contributorInfo = input.required<string>(); 
  imageUrl = input.required<string>(); 
  githubUrl = input<string>(); 
  linkedinUrl = input<string>(); 
  portfolioUrl = input<string>(); 
}

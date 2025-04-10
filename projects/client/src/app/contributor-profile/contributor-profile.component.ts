import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contributor-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contributor-profile.component.html',
})
export class ContributorProfileComponent {
  contributorInfo = input.required<string>();
  imageUrl = input.required<string>();
  githubUrl = input<string>();
  linkedinUrl = input<string>();
  portfolioUrl = input<string>();
}

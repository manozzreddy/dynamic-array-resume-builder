import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contributor-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contributor-profile.component.html',
  styleUrl: './contributor-profile.component.scss',
})
export class ContributorProfileComponent {
  @Input({ required: true }) contributorInfo!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input() githubUrl?: string;
  @Input() linkedinUrl?: string;
  @Input() portfolioUrl?: string;
}

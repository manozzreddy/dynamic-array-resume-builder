import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-websites-social-links-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './websites-social-links-form.component.html',
  styleUrl: './websites-social-links-form.component.scss'
})
export class WebsitesSocialLinksFormComponent {

}

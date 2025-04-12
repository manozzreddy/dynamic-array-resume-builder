import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-new-card',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './create-new-card.component.html',
  styleUrl: './create-new-card.component.scss',
})
export class CreateNewCardComponent {
}

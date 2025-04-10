import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-new-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './create-new-card.component.html',
  styleUrl: './create-new-card.component.scss',
})
export class CreateNewCardComponent {
  createNew() {
    throw new Error('Method not implemented.');
  }
}

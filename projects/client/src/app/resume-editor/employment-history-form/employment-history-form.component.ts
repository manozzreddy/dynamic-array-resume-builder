import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employment-history-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './employment-history-form.component.html',
  styleUrl: './employment-history-form.component.scss'
})
export class EmploymentHistoryFormComponent {

}

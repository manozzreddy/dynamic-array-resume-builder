import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-professional-summary-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './professional-summary-form.component.html',
  styleUrl: './professional-summary-form.component.scss'
})
export class ProfessionalSummaryFormComponent {

}

import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-personal-details-form',
  standalone: true,
  imports: [
    MatInputModule,
  ],
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.scss'
})
export class PersonalDetailsFormComponent {

}

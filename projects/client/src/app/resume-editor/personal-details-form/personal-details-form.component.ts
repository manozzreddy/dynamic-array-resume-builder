import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormControlReadyEvent } from '../resume-editor.component';
import { UploadPhotoFormComponent } from '../upload-photo-form/upload-photo-form.component';

@Component({
  selector: 'app-personal-details-form',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    UploadPhotoFormComponent,

  ],
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.scss',
})
export class PersonalDetailsFormComponent implements OnInit {
  personalDetailsFormReady = output<FormControlReadyEvent>();

  public personalDetailsForm: FormGroup;

  constructor() {
    this.personalDetailsForm = new FormGroup({
      fullName: new FormControl(''),
      phoneNumber: new FormControl(''),
      location: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.personalDetailsFormReady.emit({
      form: this.personalDetailsForm,
      name: 'personalDetails',
    });
  }

  subFormControlReady($event: FormControlReadyEvent) {
    this.personalDetailsForm.addControl($event.name, $event.form);
  }
}

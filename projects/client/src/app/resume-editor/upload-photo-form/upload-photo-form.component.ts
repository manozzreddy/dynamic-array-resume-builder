import { Component, Input, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControlReadyEvent } from '../resume-editor.component';

@Component({
  selector: 'app-upload-photo-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './upload-photo-form.component.html',
  styleUrl: './upload-photo-form.component.scss',
})
export class UploadPhotoFormComponent implements OnInit {
  photoControl = new FormControl({});

  selectedPhoto: File | null = null;
  photoUrl?: string | ArrayBuffer | null = null;
  photoFormControlReady = output<FormControlReadyEvent>();

  ngOnInit(): void {
    this.photoFormControlReady.emit({
      form: this.photoControl,
      name: 'photo',
    });
  }

  // Handles file selection and shows preview
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedPhoto = input.files[0];

      const reader = new FileReader();

      // Update the FormControl
      ///TODO(Manoj): instead of just setting the full file here, store the file in the firebase storage & set the url here.
      this.photoControl.setValue(this.selectedPhoto);

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.photoUrl = e.target?.result;
      };

      reader.readAsDataURL(this.selectedPhoto);
    }
  }

  // This function triggers the hidden file input
  uploadPhoto() {
    const fileInput = document.querySelector('#fileInput') as HTMLElement;
    if (fileInput) {
      fileInput.click();
    }
  }
}

import { Component, inject, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControlReadyEvent } from '../resume-editor.component';
import {
  FileUploadService,
  FileUploadStatus,
} from '../../services/file-upload/file-upload.service';

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
  uploadProgress: number | null = null; // Track photo upload progress

  private readonly fileUploadService = inject(FileUploadService);

  ngOnInit(): void {
    this.photoFormControlReady.emit({
      form: this.photoControl,
      name: 'photo',
    });
  }

  /**
   * Handles file selection, previews the image locally, and uploads it to Firebase Storage.
   * @param event The file input change event triggered by selecting a file.
   */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files?.[0]) {
      this.selectedPhoto = input.files[0];

      const reader = new FileReader();
      // Sets the selected file in FormControl
      this.photoControl.setValue(this.selectedPhoto);

      // Reads and previews the file as a data URL for immediate feedback
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.photoUrl = e.target?.result; // Set photoUrl for local preview
      };
      reader.readAsDataURL(this.selectedPhoto);

      // Uploads the file to Firebase Storage and handles progress updates and download URL retrieval
      this.fileUploadService.uploadFile(this.selectedPhoto).subscribe({
        next: (status: FileUploadStatus) => {
          this.uploadProgress = status.progress; 

          if (status.downloadUrl) {
            this.photoUrl = status.downloadUrl; // Set photoUrl to the final download URL after upload
            this.photoControl.setValue(status.downloadUrl); // Update FormControl with the firebase download URL
            this.uploadProgress = null;
          }
        },
        error: (error) => {
          console.error('File upload failed:', error);
          this.uploadProgress = null;
        },
      });
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

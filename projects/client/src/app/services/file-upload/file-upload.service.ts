import { inject, Injectable } from '@angular/core';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';
import { Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly firebaseStorage = inject(Storage);

  // Uploads a file to Firebase and returns an observable of upload progress and download URL
  uploadFile(
    file: File,
    folder: string = 'uploads'
  ): Observable<FileUploadStatus> {
    const storageRef = ref(this.firebaseStorage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Observable<FileUploadStatus>((observer) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Emit progress as a percentage
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          observer.next({ progress });
        },
        (error) => {
          console.error('Upload failed:', error);
          observer.error(error);
        },
        async () => {
          try {
            // Retrieve the download URL upon successful upload
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            observer.next({ progress: 100, downloadUrl: downloadURL }); // Emit the final status with download URL
            observer.complete();
          } catch (error) {
            observer.error(error);
          }
        }
      );
    });
  }
}

export interface FileUploadStatus {
  progress: number; // Progress in percentage (0 - 100)
  downloadUrl?: string; // URL on upload completion
}

import { inject, Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { BehaviorSubject } from 'rxjs';
import { ResumeData } from '../../../../../../libs/shared-types/src';
import saveAs from 'file-saver';
import { ref, Storage, uploadBytesResumable } from '@angular/fire/storage';

@Injectable()
export class ResumeService {
  private readonly isDownloadInProgressSubject = new BehaviorSubject<boolean>(
    false
  );
  isDownloadInProgress$ = this.isDownloadInProgressSubject.asObservable();
  private readonly functions: Functions = inject(Functions);

  private readonly storage = inject(Storage);

  /**
   * Initiates the download of a resume based on the provided resume data.
   *
   * @param resumeData - Data required to generate the resume.
   * @returns Promise<void> - Resolves once the download completes or fails.
   */
  async download(resumeData: ResumeData): Promise<void> {
    this.isDownloadInProgressSubject.next(true);

    try {
      const callable = httpsCallable<
        { resumeData: ResumeData },
        { content: string; filename: string }
      >(this.functions, 'generateResume');

      let response = await callable({
        resumeData,
      });

      const resumeFile = response.data;

      saveAs(resumeFile.content, resumeFile.filename);
    } catch (error) {
      console.log(error);
    }

    this.isDownloadInProgressSubject.next(false);
  }

  async uploadPhoto(input: HTMLInputElement) {
    if (!input.files) return;

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        uploadBytesResumable(storageRef, file);
      }
    }
  }
}

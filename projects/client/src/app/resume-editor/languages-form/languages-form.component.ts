import { Component, output } from '@angular/core';
import { FormControlReadyEvent } from '../resume-editor.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { SortableAccordionPanelComponent } from '../sortable-accordion-panel/sortable-accordion-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-languages-form',
  standalone: true,
  imports: [
    SortableAccordionPanelComponent,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './languages-form.component.html',
  styleUrl: './languages-form.component.scss',
})
export class LanguagesFormComponent {
  languagesFormArrayReady = output<FormControlReadyEvent>();
  languagesFormArray: FormArray<any> = new FormArray(<any>[]);
  filteredLanguages: string[] = [];
  languages: string[] = [
    'English',
    'Hindi',
    'Kannada',
    'Telugu',
    'Tamil',
    'Malayalam',
    'Marathi',
    'Gujarati',
    'Bengali',
    'Urdu',
    'Odia',
    'Punjabi',
    'Assamese',
    'Maithili',
    'Sanskrit',
    'Konkani',
    'Sindhi',
    'Nepali',
    'Kashmiri',
    'Manipuri',
    'Bodo',
    'Santali',
    'Dogri',
    'Khasi',
    'Mizo',
    'Garhwali',
    'Nagpuri',
    'Kokborok',
    'Kumaoni',
    'Tulu',
    'Kodava',
  ];

  constructor() {}

  ngOnInit(): void {
    this.languagesFormArrayReady.emit({
      form: this.languagesFormArray,
      name: 'languages',
    });
  }

  addLanguage(): void {
    this.languagesFormArray.push(
      new FormGroup({
        language: new FormControl(''),
        proficiency: new FormControl(''),
      })
    );
  }

  deleteLanguage(index: number) {
    this.languagesFormArray.removeAt(index);
  }

  onEnterLanguage(formGroup: FormGroup): void {
    let inputValue = (
      formGroup.get('language') as FormControl
    ).value.toLowerCase();

    this.filteredLanguages = this.languages.filter((language) =>
      language.toLowerCase().includes(inputValue)
    );
  }

  resetFilteredLanguages(): void {
    this.filteredLanguages = [...this.languages];
  }
}

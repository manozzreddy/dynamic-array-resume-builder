import { Component, OnInit, output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControlReadyEvent } from '../resume-editor.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { SortableAccordionPanelComponent } from '../sortable-accordion-panel/sortable-accordion-panel.component';
import { CommonNgxEditorComponent } from '../common-ngx-editor/common-ngx-editor.component';
import { MonthYearPickerComponent } from '../month-year-picker/month-year-picker.component';
import moment from 'moment';

@Component({
  selector: 'app-education-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    CommonModule,
    SortableAccordionPanelComponent,
    CommonNgxEditorComponent,
    MonthYearPickerComponent,

  ],
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss',
})
export class EducationFormComponent implements OnInit {
  educationFormArrayReady = output<FormControlReadyEvent>();

  educationFormArray: FormArray<any> = new FormArray(<any>[]);

  constructor() {}

  ngOnInit(): void {
    this.educationFormArrayReady.emit({
      form: this.educationFormArray,
      name: 'education',
    });
  }

  addEducation(): void {
    this.educationFormArray.push(
      new FormGroup({
        school: new FormControl(''),
        degree: new FormControl(''),
        startDate: new FormControl(moment()),
        endDate: new FormControl(moment()),
        location: new FormControl(''),
        description: new FormControl(''),
      })
    );
  }

  deleteEducation(index: number) {
    this.educationFormArray?.updateValueAndValidity();

    this.educationFormArray.removeAt(index);
  }
}

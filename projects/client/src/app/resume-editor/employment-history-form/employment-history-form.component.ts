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
import { DatePipe, CommonModule } from '@angular/common';
import { SortableAccordionPanelComponent } from '../sortable-accordion-panel/sortable-accordion-panel.component';
import { CommonNgxEditorComponent } from '../common-ngx-editor/common-ngx-editor.component';
import moment from 'moment';
import { MonthYearPickerComponent } from '../month-year-picker/month-year-picker.component';

@Component({
  selector: 'app-employment-history-form',
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
  providers: [DatePipe],
  templateUrl: './employment-history-form.component.html',
  styleUrl: './employment-history-form.component.scss',
})
export class EmploymentHistoryFormComponent implements OnInit {
  employmentHistoryFormArrayReady = output<FormControlReadyEvent>();

  employmentHistoryFormArray: FormArray<any> = new FormArray(<any>[]);

  constructor() {}

  ngOnInit(): void {
    this.employmentHistoryFormArrayReady.emit({
      form: this.employmentHistoryFormArray,
      name: 'experience',
    });
  }

  addEmployment(): void {
    this.employmentHistoryFormArray.push(
      new FormGroup({
        jobTitle: new FormControl(''),
        employer: new FormControl(''),
        startDate: new FormControl(moment()),
        endDate: new FormControl(moment()),
        location: new FormControl(''),
        description: new FormControl(''),
      })
    );
  }

  deleteEmployment(index: number) {
    this.employmentHistoryFormArray.removeAt(index);
  }
}

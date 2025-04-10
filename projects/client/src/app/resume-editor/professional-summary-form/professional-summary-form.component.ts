import { Component, OnInit, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlReadyEvent } from '../resume-editor.component';
import { WysiwygEditorComponent } from '../wysiwyg-editor/wysiwyg-editor.component';

@Component({
  selector: 'app-professional-summary-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    WysiwygEditorComponent,
  ],
  templateUrl: './professional-summary-form.component.html',
  styleUrl: './professional-summary-form.component.scss',
})
export class ProfessionalSummaryFormComponent implements OnInit {
  professionalSummaryFormReady = output<FormControlReadyEvent>();

  public professionalSummaryFormControl: FormControl<string | null>;

  constructor() {
    this.professionalSummaryFormControl = new FormControl('');
  }

  ngOnInit(): void {
    this.professionalSummaryFormReady.emit({
      name: 'professionalSummary',
      form: this.professionalSummaryFormControl,
    });
  }
}

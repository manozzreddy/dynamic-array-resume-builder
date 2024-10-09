import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormControlReadyEvent } from '../resume-editor.component';
import { CommonNgxEditorComponent } from '../common-ngx-editor/common-ngx-editor.component';

@Component({
  selector: 'app-professional-summary-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonNgxEditorComponent,
  ],
  templateUrl: './professional-summary-form.component.html',
  styleUrl: './professional-summary-form.component.scss',
})
export class ProfessionalSummaryFormComponent {
  @Output() professionalSummaryFormReady: EventEmitter<FormControlReadyEvent> =
    new EventEmitter<FormControlReadyEvent>();

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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-skills-form',
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
    MatSelectModule,
  ],
  templateUrl: './skills-form.component.html',
  styleUrl: './skills-form.component.scss',
})
export class SkillsFormComponent {
  @Output()
  skillsFormArrayReady: EventEmitter<FormControlReadyEvent> =
    new EventEmitter<FormControlReadyEvent>();
  skillsFormArray: FormArray<any> = new FormArray(<any>[]);

  constructor() {}

  ngOnInit(): void {
    this.skillsFormArrayReady.emit({
      form: this.skillsFormArray,
      name: 'skills',
    });
  }

  addSkill(): void {
    this.skillsFormArray.push(
      new FormGroup({
        skill: new FormControl(''),
        level: new FormControl(''),
      })
    );
  }

  deleteSkill(index: number) {
    this.skillsFormArray.removeAt(index);
  }

  get formControls(): FormGroup[] {
    return this.skillsFormArray?.controls as FormGroup[];
  }
}

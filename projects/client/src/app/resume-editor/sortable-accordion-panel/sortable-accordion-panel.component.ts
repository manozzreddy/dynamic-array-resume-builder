import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgTemplateOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-sortable-accordion-panel',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    MatExpansionModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
    MatIconModule,
    MatButtonModule,
    CdkDragHandle,
  ],
  templateUrl: './sortable-accordion-panel.component.html',
  styleUrl: './sortable-accordion-panel.component.scss',
})
export class SortableAccordionPanelComponent {
  @Input({ required: true }) formControls!: FormGroup[];

  @Input({ required: true }) panelTitleTemplate!: TemplateRef<any>;

  @Input({ required: true }) panelDescriptionTemplate!: TemplateRef<any>;

  @Input({ required: true }) formTemplate!: TemplateRef<any>;

  @Input({ required: true }) addButtonText!: string;

  @Output() addClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<number>();

  drop($event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(
      this.formControls,
      $event.previousIndex,
      $event.currentIndex
    );
  }

  onAdd() {
    this.addClicked.emit();
  }

  onDelete(item: number) {
    this.deleteClicked.emit(item);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  input,
  Input,
  output,
  TemplateRef,
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgTemplateOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

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
  formArray = input.required<FormArray<any>>();
  panelTitleTemplate = input.required<TemplateRef<any>>();
  panelDescriptionTemplate = input.required<TemplateRef<any>>();
  formTemplate = input.required<TemplateRef<any>>();
  entityType = input.required<string>();

  addClicked = output();
  deleteClicked = output<number>();

  readonly dialog = inject(MatDialog);

  drop($event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(
      this.formControls,
      $event.previousIndex,
      $event.currentIndex
    );

    this.formArray().updateValueAndValidity();
  }

  get formControls(): FormGroup[] {
    return this.formArray()?.controls as FormGroup[];
  }

  onAdd() {
    this.addClicked.emit();
  }

  onTapDelete(item: number) {
    this.dialog
      .open(ConfirmationDialog, {
        width: '350px',
        data: {
          entityType: this.entityType(),
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.deleteClicked.emit(item);
        }
      });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  template: `
    <h2 mat-dialog-title>Delete {{ data.entityType }}?</h2>
    <mat-dialog-content>
      Are you sure you want to delete the selected {{ data.entityType }}?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close cdkFocusInitial>No</button>
      <button mat-button (click)="delete()">Delete</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialog {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { entityType: string }) {}

  delete() {
    this.dialogRef.close(true);
  }
}

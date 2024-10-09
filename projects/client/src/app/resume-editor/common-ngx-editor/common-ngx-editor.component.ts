import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-common-ngx-editor',
  standalone: true,
  imports: [
    NgxEditorModule,
    ReactiveFormsModule,
  ],
  templateUrl: './common-ngx-editor.component.html',
  styleUrl: './common-ngx-editor.component.scss'
})
export class CommonNgxEditorComponent {
  @Input({required : true}) form!: FormGroup;

  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link',],
    ['text_color',],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor() {
    this.editor = new Editor();
  }
}

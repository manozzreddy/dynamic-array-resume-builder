import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuillModule, QuillModules } from 'ngx-quill';

@Component({
  selector: 'app-wysiwyg-editor',
  standalone: true,
  imports: [QuillModule, ReactiveFormsModule],
  templateUrl: './wysiwyg-editor.component.html',
  styleUrl: './wysiwyg-editor.component.scss',
})
export class WysiwygEditorComponent {
  control = input.required<FormControl<any>>();

  quillConfiguration: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
    ],
  };
}

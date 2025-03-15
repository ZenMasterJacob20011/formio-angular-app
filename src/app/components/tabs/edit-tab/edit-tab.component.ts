import {Component} from '@angular/core';
import {FormioEmbedModule} from '@formio/angular/embed';
import {editType, FormEditComponent} from '../../../form-edit/form-edit.component';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule,
    FormEditComponent
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css',
})
export class EditTabComponent {
  protected readonly editType = editType;
}

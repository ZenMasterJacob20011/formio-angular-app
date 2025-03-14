import {Component} from '@angular/core';
import {FormioForm} from '@formio/angular';
import {FormioEmbedModule} from '@formio/angular/embed';
import {FormioServiceWrapper} from '../../../services/formio.service.wrapper';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css',
})
export class EditTabComponent {
  form: (FormioForm & { _id?: string; }) | undefined

  constructor(private formioServiceWrapper: FormioServiceWrapper) {
    this.form = formioServiceWrapper.form;
  }

  saveForm() {
    if (this.form) {
      this.formioServiceWrapper.saveForm(this.form).subscribe({
        next(value) {
        }
      });
    }
  }
}

import {Component, Input} from '@angular/core';
import {FormioEmbedModule} from "@formio/angular/embed";
import {FormioForm} from '@formio/angular';
import {FormioServiceWrapper} from '../../services/formio.service.wrapper';
import _ from 'lodash'
import {formType} from '../../app.component';

export enum editType {
  CREATE = 'create',
  SAVE = 'save'
}

@Component({
  selector: 'app-form-edit',
  imports: [
    FormioEmbedModule
  ],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent {
  form: (FormioForm & { _id?: string; }) | undefined
  @Input() editType: editType | undefined
  @Input() formType: formType | undefined
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

  protected readonly _ = _;
}

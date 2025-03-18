import { Component } from '@angular/core';
import {editType, FormEditComponent} from '../form-edit/form-edit.component';
import {FormioServiceWrapper} from '../../services/formio.service.wrapper';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {formType} from '../../app.component';

@Component({
  selector: 'app-form-create',
  imports: [
    FormEditComponent
  ],
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css', '../../app.component.css']
})
export class FormCreateComponent {
  formType: formType | undefined
  constructor(protected formioServiceWrapper: FormioServiceWrapper, activatedRoute: ActivatedRoute) {
    formioServiceWrapper.form = {};
    activatedRoute.data.subscribe((data) => {
      this.formType = data['formType'];
    })
  }

  protected readonly editType = editType;
}

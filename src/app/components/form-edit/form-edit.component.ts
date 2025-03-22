import {Component, Input} from '@angular/core';
import {FormioEmbedModule} from "@formio/angular/embed";
import {FormioForm} from '@formio/angular';
import {FormioServiceWrapper} from '../../services/formio.service.wrapper';
import _ from 'lodash'
import {formType} from '../../app.component';
import {FormsModule} from "@angular/forms";
import {Router} from '@angular/router';

export enum editType {
  CREATE = 'create',
  SAVE = 'save'
}

@Component({
  selector: 'app-form-edit',
  imports: [
    FormioEmbedModule,
    FormsModule
  ],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent {
  form: (FormioForm & { _id?: string; }) | undefined
  @Input() editType: editType | undefined
  @Input() formType: formType | undefined
  formTitle: string | undefined
  formName: string | undefined
  formTags: string[] | undefined
  formPath: string | undefined

  constructor(private formioServiceWrapper: FormioServiceWrapper, private router: Router) {
    this.form = formioServiceWrapper.form;
    this.formTitle = this.form?.title;
    this.formName = this.form?.name;
    this.formTags = this.form?.tags;
    this.formPath = this.form?.path;
  }

  saveForm() {
    if (this.form) {
      this.form.title = this.formTitle;
      this.form.name = this.formName;
      this.form.tags = this.formTags;
      this.form.path = this.formPath;
      this.form.type = this.formType;
      const realThis = this;
      this.formioServiceWrapper.saveForm(this.form).subscribe({
        next(value: any) {
          if (realThis.editType === editType.CREATE) {
            realThis.router.navigate([realThis.formType, value._id, 'edit'])
          }
        }
      });
    }
  }

  handleTitleChange(){
    this.formName = _.lowerCase(this.formTitle);
    this.formPath = _.lowerCase(this.formTitle);
  }

  protected readonly _ = _;


}

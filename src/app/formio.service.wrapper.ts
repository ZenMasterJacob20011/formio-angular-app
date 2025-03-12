import {Injectable} from '@angular/core';
import {FormioForm, FormioService} from '@formio/angular';

@Injectable({
  providedIn: 'root'
})
export class FormioServiceWrapper {
  formioService: FormioService | undefined
  form: FormioForm | undefined

  constructor() {
  }

  saveForm(form: FormioForm) {
    if (this.formioService) {
      return this.formioService.saveForm(form);
    }
    throw Error('You need to load a form first before saving');
  }

  loadForm(url: string) {
    this.formioService = new FormioService(url, {});
    return this.formioService.loadForm();
  }
}

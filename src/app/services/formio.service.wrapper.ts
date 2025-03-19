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
    this.formioService = new FormioService('/form');
    return this.formioService.saveForm(form);

  }

  loadForm(url: string) {
    this.formioService = new FormioService(url, {});
    return this.formioService.loadForm();
  }
}

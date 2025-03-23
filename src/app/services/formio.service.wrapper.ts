import {EventEmitter, Injectable} from '@angular/core';
import {FormioForm, FormioService} from '@formio/angular';
import {Formio} from '@formio/js';

@Injectable({
  providedIn: 'root'
})
export class FormioServiceWrapper {
  formioService: FormioService | undefined
  form: FormioForm | undefined
  refreshResourceGrid: EventEmitter<object>
  refreshFormGrid: EventEmitter<object>

  constructor() {
    this.refreshResourceGrid = new EventEmitter<object>;
    this.refreshFormGrid = new EventEmitter<object>;
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

  deleteForm(_id: string) {
    const formio = new Formio(`/form/${_id}`);
    return formio.delete('form');
  }

  deleteSubmission(submissionURL: string){
    this.formioService = new FormioService(submissionURL);
    return this.formioService.deleteSubmission();
  }

  emitResourceGridRefresh() {
    this.refreshResourceGrid.emit({type: 'resource'});
  }

  emitFormGridRefresh() {
    this.refreshFormGrid.emit({type: 'form'});
  }

}

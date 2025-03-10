import {Component, Input, OnInit} from '@angular/core';
import {FormioForm, FormioService} from '@formio/angular';
import {EditTabComponent} from '../edit-tab/edit-tab.component';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-view-form',
  imports: [
    EditTabComponent
  ],
  providers: [
    {
      provide: 'FormioService',
      useValue: {url: 'hello', options: {}}
    }
  ],
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css', '../app.component.css']
})
export class ViewFormComponent implements OnInit{
  @Input() formType!: 'form' | 'resource';
  @Input() id!: string
  formTitle: string
  form: FormioForm | undefined
  private formioService!: FormioService;

  constructor() {
    this.formTitle = '';
  }

  ngOnInit() {
    this.formioService = new FormioService(`http://localhost:3001/form/${this.id}`, {});
    const form = this.formioService.loadForm();
    this.formTitle = "";
    const realThis = this;
    form.subscribe({
      next(formioForm) {
        realThis.formTitle = formioForm.title!;
        realThis.form = formioForm;
      }
    })
  }

}

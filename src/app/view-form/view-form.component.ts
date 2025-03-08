import {Component, Input, OnInit} from '@angular/core';
import {FormioService} from '@formio/angular';
import {EditTabComponent} from '../edit-tab/edit-tab.component';

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
  @Input() formTitle: string
  private formioService!: FormioService;
  constructor() {
    this.formTitle = "";
  }
  ngOnInit() {
    this.formioService = new FormioService(`http://localhost:3001/form/${this.id}`, {});
    const form = this.formioService.loadForm();
    const realThis = this;
    form.subscribe({
      next(formioForm){
        realThis.formTitle = formioForm.title!;
      }
    });
  }

}

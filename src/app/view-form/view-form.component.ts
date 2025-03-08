import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormioService} from '@formio/angular';

@Component({
  selector: 'app-view-form',
  imports: [
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
  @Input() viewType!: string;
  @Input() id!: string
  @Input() formTitle: string | undefined
  private formioService: FormioService | undefined;
  constructor() {
    this.formTitle = "hello";
  }
  ngOnInit() {
    this.formioService = new FormioService(`http://localhost:3001/form/${this.id}`, {});
    const form = this.formioService.loadForm();
    const realThis = this;
    form.subscribe({
      next(formioForm){
        realThis.formTitle = formioForm.title;
      }
    })
  }

}

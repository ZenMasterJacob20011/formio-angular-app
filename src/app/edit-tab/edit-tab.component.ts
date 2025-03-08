import {Component, Input} from '@angular/core';
import {FormioForm} from '@formio/angular';

@Component({
  selector: 'app-edit-tab',
  imports: [],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css'
})
export class EditTabComponent{
  @Input() name: string
  @Input() url: string
  @Input() formType: 'form' | 'resource' | undefined
  @Input() id: string
  @Input() formTitle: string
  @Input() path: string
  @Input() displayAs: 'form' | 'wizard' | undefined
  @Input() form: FormioForm

  constructor() {
    this.name = '';
    this.url = '';
    this.id = '';
    this.formTitle = '';
    this.path = '';
    this.form = {};
  }
}

import {Component, Input} from '@angular/core';
import {FormioForm} from '@formio/angular';
import {FormioEmbedModule} from '@formio/angular/embed';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css'
})
export class EditTabComponent {
  @Input() form: FormioForm

  constructor() {
    this.form = {};
  }

}

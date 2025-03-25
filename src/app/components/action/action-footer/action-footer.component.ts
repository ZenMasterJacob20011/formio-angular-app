import { Component } from '@angular/core';
import {GridFooterComponent} from '@formio/angular/grid';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-action-footer',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './action-footer.component.html',
  styleUrl: './action-footer.component.css'
})
export class ActionFooterComponent extends GridFooterComponent{
  actions: {value: string, label: string}[]
  constructor() {
    super();
    this.actions = this.getActions();
  }

  getActions(){
    return [
      {
        value: 'email',
        label: 'Email'
      },
      {
        value: 'login',
        label: 'Login'
      },
      {
        value: 'resetpassword',
        label: 'Reset Password'
      },
      {
        value: 'roleassignment',
        label: 'Role Assignment'
      },
      {
        value: 'savesubmission',
        label: 'Save Submission'
      },
      {
        value: 'webhook',
        label: 'Webhook'
      }
    ]
  }
}

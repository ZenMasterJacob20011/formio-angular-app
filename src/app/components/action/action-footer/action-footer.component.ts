import {AfterViewChecked, Component} from '@angular/core';
import {GridFooterComponent} from '@formio/angular/grid';
import {FormsModule} from '@angular/forms';
import Choices from 'choices.js';

@Component({
  selector: 'app-action-footer',
  imports: [
    FormsModule
  ],
  templateUrl: './action-footer.component.html',
  styleUrl: './action-footer.component.css'
})
export class ActionFooterComponent extends GridFooterComponent implements AfterViewChecked {
  actions: { value: string, label: string }[]
  choices: Choices | undefined

  constructor() {
    super();
    this.actions = this.getActions();
  }

  getActions() {
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

  ngAfterViewChecked(): void {
    if (!this.choices && document.getElementById('choices')) {
      this.choices = new Choices(document.getElementById('choices')!, {
        choices: this.getActions(),
        // @ts-ignore
        classNames: {
          containerOuter: ['choices', 'w-25', 'd-inline-block', 'mb-0']
        }
      });
    }
  }
}

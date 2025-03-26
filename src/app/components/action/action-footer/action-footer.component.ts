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
        label: 'Email',
        selected: false
      },
      {
        value: 'login',
        label: 'Login',
        selected: false
      },
      {
        value: 'resetpass',
        label: 'Reset Password',
        selected: false
      },
      {
        value: 'role',
        label: 'Role Assignment',
        selected: false
      },
      {
        value: 'save',
        label: 'Save Submission',
        selected: false
      },
      {
        value: 'webhook',
        label: 'Webhook',
        selected: false
      }
    ]
  }

  getSelectedAction(){
    return this.choices?.getValue(true);
  }

  ngAfterViewChecked(): void {
    if (!this.choices && document.getElementById('choices')) {
      this.choices = new Choices(document.getElementById('choices')!, {
        items: [],
        choices: this.getActions(),
        removeItemButton: true,
        // @ts-ignore
        classNames: {
          containerOuter: ['choices', 'w-25', 'd-inline-block', 'mb-0']
        }
      });
    }
  }
}

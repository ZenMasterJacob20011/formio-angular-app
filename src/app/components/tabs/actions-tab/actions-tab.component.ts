import {Component} from '@angular/core';
import {ExtendedComponentSchema, FormioComponent} from '@formio/angular';
import {FormioGrid} from '@formio/angular/grid';
import {ActionHeaderComponent} from '../../action/action-header/action-header.component';
import {ActionBodyComponent} from '../../action/action-body/action-body.component';
import {ActionFooterComponent} from '../../action/action-footer/action-footer.component';
import {ActivatedRoute} from '@angular/router';
import {DynamicComponent, DynamicIoDirective} from 'ng-dynamic-component';

type action = {
  access: { handler: boolean, method: boolean },
  defaults: { handler: string[], method: string[] },
  description: string,
  name: string,
  priority: number,
  settingsForm: { components: ExtendedComponentSchema[], action: string },
  title: string
}


@Component({
  selector: 'app-actions-tab',
  imports: [
    FormioGrid,
    DynamicComponent,
    DynamicIoDirective,
  ],
  templateUrl: './actions-tab.component.html',
  styleUrl: './actions-tab.component.css'
})
export class ActionsTabComponent {
  components: any
  actionsUrl: string
  action: action | undefined

  constructor(activatedRoute: ActivatedRoute) {
    this.components = {};
    this.components.header = ActionHeaderComponent;
    this.components.body = ActionBodyComponent;
    this.components.footer = ActionFooterComponent;
    this.actionsUrl = `http://localhost:3001/form/${activatedRoute.parent?.snapshot.paramMap.get('id')}/action`;
  }

  async handleAddAction(action: string) {
    this.action = await this.getActionForm(action);
  }

  async getActionForm(action: string) {
    const response = await fetch(`${this.actionsUrl}s/${action}`, {
      headers: {
        'x-jwt-token': localStorage.getItem('formioToken')!
      }
    });
    return response.json();
  }

  handleActionSubmit(submission: any) {
    console.log(submission);
  }


  protected readonly FormioComponent = FormioComponent;
}

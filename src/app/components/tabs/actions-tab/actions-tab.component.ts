import {Component, EventEmitter} from '@angular/core';
import {ExtendedComponentSchema, FormioComponent} from '@formio/angular';
import {FormioGrid} from '@formio/angular/grid';
import {ActionHeaderComponent} from '../../action/action-header/action-header.component';
import {ActionBodyComponent} from '../../action/action-body/action-body.component';
import {ActionFooterComponent} from '../../action/action-footer/action-footer.component';
import {ActivatedRoute} from '@angular/router';
import {DynamicComponent, DynamicIoDirective, IoEventContextToken} from 'ng-dynamic-component';
import {FormioServiceWrapper} from '../../../services/formio.service.wrapper';
import _ from 'lodash';

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
  providers: [
    {
      provide: IoEventContextToken,
      useExisting: ActionsTabComponent
    }
  ],
  templateUrl: './actions-tab.component.html',
  styleUrl: './actions-tab.component.css'
})
export class ActionsTabComponent {
  components: any
  actionsUrl: string
  action: action | undefined
  actionType: 'add' | 'update' | undefined
  refreshActions: EventEmitter<object>

  constructor(activatedRoute: ActivatedRoute, private formioServiceWrapper: FormioServiceWrapper) {
    this.components = {};
    this.components.header = ActionHeaderComponent;
    this.components.body = ActionBodyComponent;
    this.components.footer = ActionFooterComponent;
    this.actionsUrl = `http://localhost:3001/form/${activatedRoute.parent?.snapshot.paramMap.get('id')}/action`;
    this.refreshActions = new EventEmitter();
  }

  async handleAddAction(action: string) {
    this.actionType = 'add';
    this.action = await this.getActionForm(action);
  }

  async getActionForm(action: string): Promise<action> {
    const response = await fetch(`${this.actionsUrl}s/${action}`, {
      headers: {
        'x-jwt-token': localStorage.getItem('formioToken')!
      }
    });
    return response.json();
  }

  handleActionSubmit() {
    this.refreshActions.emit({});
    this.action = undefined;
  }

  handleButtonAction(action: any) {
    const actionType = action.action;
    if (actionType === 'delete') {
      const result = window.confirm('Are you sure you want to delete this action?');
      if (result) {
        this.deleteAction(action.row._id).then((result) => {
          this.refreshActions.emit({});
        });
      }
    }
  }

  deleteAction(actionId: string) {
    return fetch(`${this.actionsUrl}/${actionId}`, {
      method: 'DELETE',
      headers: {
        'x-jwt-token': localStorage.getItem('formioToken')!
      }
    }).then(response => response.text())
  }

  async handleSelectAction(action: any) {
    this.actionType = 'update';
    const actionForm = await this.getActionForm(action.name);
    this.action = _.merge(actionForm, action);
  }


  protected readonly FormioComponent = FormioComponent;
  protected readonly _ = _;
}

import {Component, EventEmitter} from '@angular/core';
import {ExtendedComponentSchema, FormioComponent} from '@formio/angular';
import {FormioGrid} from '@formio/angular/grid';
import {ActionHeaderComponent} from '../../action/action-header/action-header.component';
import {ActionBodyComponent} from '../../action/action-body/action-body.component';
import {ActionFooterComponent} from '../../action/action-footer/action-footer.component';
import {ActivatedRoute} from '@angular/router';
import {DynamicComponent, DynamicIoDirective, IoEventContextToken} from 'ng-dynamic-component';

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
  refreshActions: EventEmitter<object>

  constructor(activatedRoute: ActivatedRoute) {
    this.components = {};
    this.components.header = ActionHeaderComponent;
    this.components.body = ActionBodyComponent;
    this.components.footer = ActionFooterComponent;
    this.actionsUrl = `http://localhost:3001/form/${activatedRoute.parent?.snapshot.paramMap.get('id')}/action`;
    this.refreshActions = new EventEmitter();
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

  handleActionSubmit() {
    this.refreshActions.emit({});
    this.action = undefined;
  }


  protected readonly FormioComponent = FormioComponent;
}

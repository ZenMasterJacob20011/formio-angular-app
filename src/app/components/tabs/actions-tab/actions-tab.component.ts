import { Component } from '@angular/core';
import {FormioGrid} from '@formio/angular/grid';
import {ActionHeaderComponent} from '../../action/action-header/action-header.component';
import {ActionBodyComponent} from '../../action/action-body/action-body.component';
import {ActionFooterComponent} from '../../action/action-footer/action-footer.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-actions-tab',
  imports: [
    FormioGrid
  ],
  templateUrl: './actions-tab.component.html',
  styleUrl: './actions-tab.component.css'
})
export class ActionsTabComponent {
  components: any
  actionsUrl: string
  constructor(activatedRoute: ActivatedRoute) {
    this.components = {};
    this.components.header = ActionHeaderComponent;
    this.components.body = ActionBodyComponent;
    this.components.footer = ActionFooterComponent;
    this.actionsUrl = `http://localhost:3001/form/${activatedRoute.parent?.snapshot.paramMap.get('id')}/action`;
  }
}

import { Component } from '@angular/core';
import {FormioGrid} from '@formio/angular/grid';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-tab',
  imports: [
    FormioGrid
  ],
  templateUrl: './view-tab.component.html',
  styleUrl: './view-tab.component.css'
})
export class ViewTabComponent {
  formUrl: string

  constructor(private activatedRouter: ActivatedRoute) {
    this.formUrl = `/form/${activatedRouter.parent?.snapshot.paramMap.get('id')}`;
  }
}

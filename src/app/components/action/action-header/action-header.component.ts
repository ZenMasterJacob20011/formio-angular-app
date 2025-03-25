import {Component} from '@angular/core';
import {GridHeaderComponent} from '@formio/angular/grid';

import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-action-header',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './action-header.component.html',
  styleUrl: './action-header.component.css'
})
export class ActionHeaderComponent extends GridHeaderComponent {
  public header: any;

  override load(formio?: any) {
    this.header = {
      label: 'Title',
      key: 'title',
      sort: 'asc'
    };
    this.headers = [this.header];
    return Promise.resolve(this.headers);
  }
}

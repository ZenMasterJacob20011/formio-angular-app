import {Component} from '@angular/core';
import {GridBodyComponent} from '@formio/angular/grid';
import {FormioPromiseService, FormioSubmission} from '@formio/angular';
import {NgForOf, NgIf} from '@angular/common';
// @ts-ignore
import {GridHeader} from '@formio/angular/grid/types/grid-header';
import {get} from 'lodash';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-action-body',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './action-body.component.html',
  styleUrl: './action-body.component.css'
})
export class ActionBodyComponent extends GridBodyComponent {

  override load(formio: FormioPromiseService, query?: any): Promise<Record<string, string>[]> {
    return fetch(formio.url, {
      headers: {
        'x-jwt-token': localStorage.getItem('formioToken')!
      }
    }).then(res => res.json())
      .then(actions => this.setRows(query, actions))
  }

  override setRows(query: any, items: any): any[] {
    return super.setRows(query, items);
  }

  view(submission: FormioSubmission, header: GridHeader): string {
    const cellValue: any = get(submission, header.key);
    if (header.renderCell) {
      return header.renderCell(cellValue, header.component);
    } else {
      if (header.component) {
        if (header.component.getView) {
          return header.component.getView(cellValue);
        }
        return header.component.asString(cellValue);
      } else {
        return cellValue.toString();
      }
    }
  }
}

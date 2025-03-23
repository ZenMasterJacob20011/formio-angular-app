import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {FormioGrid} from '@formio/angular/grid';
import {ActivatedRoute} from '@angular/router';
import {NgComponentOutlet} from '@angular/common';
import {FormioComponent} from '@formio/angular';

@Component({
  selector: 'app-view-tab',
  imports: [
    FormioGrid,
    NgComponentOutlet
  ],
  templateUrl: './view-tab.component.html',
  styleUrl: './view-tab.component.css'
})
export class ViewTabComponent {
  formUrl: string
  src: string | undefined
  submission: object | undefined
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef

  constructor(activatedRouter: ActivatedRoute) {
    this.formUrl = `/form/${activatedRouter.parent?.snapshot.paramMap.get('id')}`;
  }

  handleSubmissionClick(event: any) {
    this.src = undefined;
    this.submission = undefined;
    console.log(event);
    this.submission = {data: event.data};
    this.src = `/form/${event.form}`
  }

  protected readonly FormioComponent = FormioComponent;
}

import {Component, EventEmitter} from '@angular/core';
import {FormioGrid} from '@formio/angular/grid';
import {ActivatedRoute} from '@angular/router';
import {FormioComponent} from '@formio/angular';
import {FormioServiceWrapper} from '../../../services/formio.service.wrapper';
import {DynamicComponent, DynamicIoDirective, IoEventContextToken} from 'ng-dynamic-component';

@Component({
  selector: 'app-view-tab',
  imports: [
    FormioGrid,
    DynamicIoDirective,
    DynamicComponent,
  ],
  providers: [
    {
      provide: IoEventContextToken,
      useExisting: ViewTabComponent
    }
  ],
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.css', '../../../app.component.css']
})
export class ViewTabComponent {
  formUrl: string
  src: string | undefined
  submission: object | undefined
  submissionId: string | undefined
  refreshSubmissions: EventEmitter<object>

  constructor(private formioServiceWrapper: FormioServiceWrapper, activatedRouter: ActivatedRoute) {
    this.formUrl = `/form/${activatedRouter.parent?.snapshot.paramMap.get('id')}`;
    this.refreshSubmissions = new EventEmitter();
  }

  handleSubmissionClick(event: any) {
    this.src = undefined;
    this.submission = undefined;
    this.submissionId = event._id;
    this.submission = {data: event.data, _id: event._id};
    this.src = `/form/${event.form}`;
  }

  handleSubmissionUpdate(event: any) {
    this.refreshSubmissions.emit({});
    this.src = undefined;
  }

  deleteSubmission() {
    const realThis = this;
    this.formioServiceWrapper.deleteSubmission(`${this.src}/submission/${this.submissionId}`).subscribe({
      next() {
        realThis.refreshSubmissions.emit({});
        realThis.src = undefined;
      }
    });
  }

  protected readonly FormioComponent = FormioComponent;
}

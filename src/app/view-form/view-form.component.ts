import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormioForm, FormioService} from '@formio/angular';
import {EditTabComponent} from '../edit-tab/edit-tab.component';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-form',
  imports: [
    EditTabComponent
  ],
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css', '../app.component.css']
})
export class ViewFormComponent implements OnInit, OnDestroy{
  @Input() formType!: 'form' | 'resource';
  @Input() id!: string
  formTitle: string
  form: FormioForm | undefined
  private formioService!: FormioService;
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {
    this.formTitle = '';
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(param => {
        let id = param.get('id');
        this.formioService = new FormioService(`http://localhost:3001/form/${id}`, {});
        const form = this.formioService.loadForm();
        this.formTitle = "";
        const realThis = this;
        form.subscribe({
          next(formioForm) {
            realThis.formTitle = formioForm.title!;
            realThis.form = formioForm;
          }
        })
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

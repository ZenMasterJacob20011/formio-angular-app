import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormioForm} from '@formio/angular';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormioServiceWrapper} from '../../services/formio.service.wrapper';
import {formType} from '../../app.component';

@Component({
  selector: 'app-view-form',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css', '../../app.component.css']
})
export class ViewFormComponent implements OnInit, OnDestroy {
  @Input() formType!: formType;
  @Input() id!: string
  form: FormioForm | undefined
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, protected formioServiceWrapper: FormioServiceWrapper) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(param => {
        let id = param.get('id');
        const realThis = this;
        this.formioServiceWrapper.loadForm(`http://localhost:3001/form/${id}`).subscribe({
          next(formioForm) {
            realThis.formioServiceWrapper.form = formioForm;
            realThis.form = formioForm;
          }
        });

      })
  }

  ngOnDestroy() {
    delete this.formioServiceWrapper.form
    this.destroy$.next();
    this.destroy$.complete();
  }

}

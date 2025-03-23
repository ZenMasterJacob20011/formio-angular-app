import {Component} from '@angular/core';
import {FormioModule} from '@formio/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-use-tab',
  imports: [
    FormioModule
  ],
  templateUrl: './use-tab.component.html',
  styleUrl: './use-tab.component.css'
})
export class UseTabComponent {
  public formUrl: string

  constructor(private router: Router, public activatedRouter: ActivatedRoute) {
    this.formUrl = `/form/${activatedRouter.parent?.snapshot.paramMap.get('id')}`;
  }

  handleSubmit(event: any) {
    this.router.navigate(['form', event.form, 'view']);
  }
}

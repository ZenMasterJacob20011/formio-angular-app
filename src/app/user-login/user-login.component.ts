import { Component } from '@angular/core';
import {FormioAuthLoginComponent, FormioAuthService} from '@formio/angular/auth';
import {FormioModule} from '@formio/angular';

@Component({
  selector: 'app-user-login',
  imports: [
    FormioModule
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent extends FormioAuthLoginComponent{
  constructor(service: FormioAuthService) {
    super(service);
  }
}

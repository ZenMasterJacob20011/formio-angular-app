import {Component} from '@angular/core';
import {UserLoginComponent} from './auth/user-login/user-login.component';
import {NgIf} from '@angular/common';
import {FormioAuthService} from '@formio/angular/auth';

@Component({
  selector: 'app-root',
  imports: [
    UserLoginComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formio-angular-app';
  constructor(public service: FormioAuthService) {

  }
}

import {Component} from '@angular/core';
import {UserLoginComponent} from './auth/user-login/user-login.component';
import {FormioAuthService} from '@formio/angular/auth';
import {InfoPanelComponent} from './info-panel/info-panel.component';
import {FormioGrid} from '@formio/angular/grid';

@Component({
  selector: 'app-root',
  imports: [
    UserLoginComponent,
    InfoPanelComponent,
    FormioGrid,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formio-angular-app';

  constructor(public service: FormioAuthService) {

  }

  isActionAllowed = (action: string) => {
    return action !== 'formCreate';
  }
}

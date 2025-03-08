import {Component} from '@angular/core';
import {UserLoginComponent} from './auth/user-login/user-login.component';
import {FormioAuthService} from '@formio/angular/auth';
import {InfoPanelComponent} from './info-panel/info-panel.component';
import {FormioGrid} from '@formio/angular/grid';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  imports: [
    UserLoginComponent,
    InfoPanelComponent,
    FormioGrid,
    NgTemplateOutlet,
    RouterOutlet,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formio-angular-app';

  constructor(public service: FormioAuthService, public router: Router) {

  }
  navigateToViewPage(event: Record<string, any>){
    console.log('hello');
    this.router.navigate([event['type'], event['_id'], 'edit']);
  }

  isActionAllowed = (action: string) => {
    return action !== 'formCreate';
  }
  protected readonly routes = routes;
}

import { Component } from '@angular/core';
import {FormioAuthService} from '@formio/angular/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-panel',
  imports: [

  ],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.css'
})
export class InfoPanelComponent {
  constructor(public service: FormioAuthService, public router: Router) {

  }
}

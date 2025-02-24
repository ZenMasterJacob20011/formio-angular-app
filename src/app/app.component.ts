import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FormioModule} from '@formio/angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormioModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formio-angular-app';
}

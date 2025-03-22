import {AfterViewInit, Component, EventEmitter} from '@angular/core';
import {UserLoginComponent} from './components/auth/user-login/user-login.component';
import {FormioAuthService} from '@formio/angular/auth';
import {InfoPanelComponent} from './components/info-panel/info-panel.component';
import {FormioGrid} from '@formio/angular/grid';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {InfoPanelService} from './services/info-panel.service';
import {FormioForm} from '@formio/angular';
import {FormioServiceWrapper} from './services/formio.service.wrapper';

export enum formType {
  form = 'form',
  resource = 'resource'
}

@Component({
  selector: 'app-root',
  imports: [
    UserLoginComponent,
    InfoPanelComponent,
    FormioGrid,
    NgTemplateOutlet,
    RouterOutlet,
    NgIf,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'formio-angular-app';
  infoPanelHTMLContent: string
  refreshResourceGrid: EventEmitter<object>
  refreshFormGrid: EventEmitter<object>

  constructor(private formioServiceWrapper: FormioServiceWrapper,public service: FormioAuthService, public router: Router, public infoPanelService: InfoPanelService) {
    this.infoPanelHTMLContent = '';
    this.refreshResourceGrid = new EventEmitter();
    this.refreshFormGrid = new EventEmitter();
  }


  navigateToViewPage(event: Record<string, any>) {
    this.router.navigate([event['type'], event['_id'], 'edit']);
  }

  isActionAllowed = (action: string) => {
    return !(action === 'formCreate' || action === 'formView' || action === 'formSubmission');
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.infoPanelHTMLContent = this.getInfoPanelContent(event.url);
      }
    })
  }

  getInfoPanelContent(url: string): string {
    switch (url) {
      case '/':
        return `<div class="context-data default active">
  <div class="context-header"><h2 class="strong">Open Source vs Enterprise</h2></div>
  <div class="context-expand"><p>This is the Open Source Developer Platform, which includes the Form &amp; API
    platform. Some features are only available on the enterprise platform. If you are looking for the Enterprise
    Platform setup and you have a license key, <a href="https://form.io/contact" rel="noreferrer" target="_blank">contact
      us</a>.</p>
    <p>If you want to go to market as fast as possible to offload the time and cost of installing, configuring,
      wiring, and maintaining the platform as well as gain access to the enterprise features, <a href="https://form.io/contact"
                                                                                                 rel="noreferrer"
                                                                                                 target="_blank">contact
        us</a> to get a license key.</p>
    <p class="enterprise mclear">This icon incidates a feature only available in our <span class="strong underline">enterprise</span>
      offerings.</p>
    <div class="section">
      <ul>
        <li class="enterprise"><span class="strong">Projects</span> are segmented sandboxes that house a set of forms
          and resources. By leveraging projects, you can assign teams to different projects to limit their access
          based on what's relevant to team members.
        </li>
        <li class="enterprise"><span class="strong">CORS Configuration:</span> Built-in user-interface to configure
          your CORS settings globally.
        </li>
        <li class="enterprise"><span class="strong">Reprting UI:</span> Sort, filter, and visualize your data.</li>
        <li class="enterprise"><span class="strong">PDF &amp; PDF+ Servers:</span> Allow users to submit via a PDF
          document and receive a PDF of their submission data.
        </li>
        <li class="enterprise">Standalone, embeddable <span class="strong">Form Manager</span> application that allows
          non-developers to build drag and drop forms and limits access to sensitive configurations.
        </li>
      </ul>
    </div>
    <div class="cta-license"></div>
  </div>
</div>`
      default:
        return ''
    }
  }

  handleRowAction(event: any){
    if (event.action === 'delete'){
      const result = confirm('Are you sure you want to delete this form?');
      if(result) {
        this.formioServiceWrapper.deleteForm(event.row._id).then((response: any) => {
          if(event.row.type === formType.resource){
            this.refreshResourceGrid.emit({type: "resource"});
          }else{
            this.refreshFormGrid.emit({type: "form"});
          }
        });
      }
    }else if(event.action === 'edit'){
      const formType: formType = event.row.type;
      this.router.navigate([formType, event.row._id, 'edit']);
    }
  }
}

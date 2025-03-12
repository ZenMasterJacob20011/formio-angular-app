import {Routes, UrlSegment} from '@angular/router';
import {ViewFormComponent} from './view-form/view-form.component';
import {EditTabComponent} from './tabs/edit-tab/edit-tab.component';
import {UseTabComponent} from './tabs/use-tab/use-tab.component';
import {ViewTabComponent} from './tabs/view-tab/view-tab.component';
import {ActionsTabComponent} from './tabs/actions-tab/actions-tab.component';
import {AccessTabComponent} from './tabs/access-tab/access-tab.component';

export const routes: Routes = [
  {
    path: ':formType/:id',
    component: ViewFormComponent,
    children: [
      {
        path: 'edit',
        component: EditTabComponent,
      },
      {
        path: 'use',
        component: UseTabComponent
      },
      {
        path: 'view',
        component: ViewTabComponent
      },
      {
        path: 'actions',
        component: ActionsTabComponent
      },
      {
        path: 'access',
        component: AccessTabComponent
      },
      {
        path: '**',
        component: AccessTabComponent
      }
    ]
  },
];

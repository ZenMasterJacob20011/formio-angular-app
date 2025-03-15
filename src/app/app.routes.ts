import {Routes} from '@angular/router';
import {ViewFormComponent} from './components/view-form/view-form.component';
import {EditTabComponent} from './components/tabs/edit-tab/edit-tab.component';
import {UseTabComponent} from './components/tabs/use-tab/use-tab.component';
import {ViewTabComponent} from './components/tabs/view-tab/view-tab.component';
import {ActionsTabComponent} from './components/tabs/actions-tab/actions-tab.component';
import {AccessTabComponent} from './components/tabs/access-tab/access-tab.component';
import {FormCreateComponent} from './form-create/form-create.component';
import {formType} from './app.component';

export const routes: Routes = [
  {
    path: 'newform',
    component: FormCreateComponent,
    data: {
      formType: formType.form
    }
  },
  {
    path: 'newresource',
    component: FormCreateComponent,
    data: {
      formType: formType.resource
    }
  },
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

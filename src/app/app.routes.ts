import {Routes, UrlSegment} from '@angular/router';
import {ViewFormComponent} from './view-form/view-form.component';

export const routes: Routes = [
  {
    matcher: (url) => {
      if (url.length === 3 && url[0].path.match(/^form$|^resource$/gm) && url[1].path.match(/[a-zA-Z0-9]+/gm) && url[2].path.match(/^edit$/gm)){
        return {consumed: url, posParams: {viewType: new UrlSegment(url[0].path, {}), id: new UrlSegment(url[1].path, {})}};
      }
      return null;
    },
    component: ViewFormComponent
  }
];

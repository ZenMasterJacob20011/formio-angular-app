import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
}

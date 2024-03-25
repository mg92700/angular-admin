import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

import { Observable, map, of } from 'rxjs';
import { AuthService } from '../_services/authentification/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  
  constructor(public authService: AuthService, public router: Router) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isLoggedIn$.pipe(
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            window.alert('Access Denied, Login is Required to Access This Page!');
            return this.router.createUrlTree(['login']);
          }
          return true;
        })
      );
  }
}
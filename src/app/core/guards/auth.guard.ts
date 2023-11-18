import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.userService.user.pipe(
      map((user) => {
        const isAuth = !!user;
        if (!isAuth) {
          return this.router.createUrlTree(['/auth']);
        }
        if (user?.studentStatus === 2) {
          return this.router.createUrlTree(['/student']);
        }
        return this.router.createUrlTree(['/admin']);
      })
    );
  }
}

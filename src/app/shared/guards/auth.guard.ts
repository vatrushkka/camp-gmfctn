import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignInService } from '@shared/services/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: SignInService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(map(user => {
      return !!user ? true : this.router.createUrlTree(['/sign-in']);
    }));
  }
}

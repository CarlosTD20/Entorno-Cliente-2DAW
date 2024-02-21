import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../Servicios/http.service';

@Injectable({
  providedIn: 'root'
})

export class GuardPasswordGuard implements CanActivate {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.http.getPasswrod()) {
      return true
    } else {
      this.router.navigate(['/'])
      return false
      
    }
  }
}

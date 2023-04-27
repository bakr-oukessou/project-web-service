import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ServService } from './serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ServService: ServService, private router: Router) { }

  canActivate(): boolean {
    if (this.ServService.izAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/register']);
      return false;
    }
  }
  
}

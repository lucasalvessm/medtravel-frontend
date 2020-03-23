import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private router: Router) { }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // if (this.isLoggedIn()) return true;

      // this.router.navigate(['/login']);
      // return false;
      return true;
   }

   isLoggedIn = (): boolean => {
      return true;
      /* const sessionExpirationDate = localStorage.getItem('sessionExpirationDate')
      return sessionExpirationDate ?
         new Date(sessionExpirationDate) > new Date()
         : false; */
   }

}
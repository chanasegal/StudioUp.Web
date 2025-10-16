import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  login:boolean = false
  constructor(private authService: AuthService, private router: Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        this.login = true      
      }
       else {
        this.authService.checkToken().subscribe(a => {
          this.login = a  
          if(a == false)
            this.router.navigate(['/login']); // ניתוב לדף התחברות אם המשתמש לא מחובר
        })
            
      }
     return this.login;
    
  }
}

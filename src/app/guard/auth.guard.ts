import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      let url: string = state.url;
      return this.checkLogin(url);
    }
  
  constructor(private _user: UsersService,
    private _router: Router
    ){}

  checkLogin(url:any){
    if(this._user.getStatus() == true) {
      return true;
    }else{
    this._router.navigate(['/login']);
    return false;
    }
  }

  
}

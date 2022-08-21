import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { AuthState } from "./auth.state";

@Injectable()
export class AuthGuard implements CanActivate{


    constructor(private router: Router){}
    
    @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
    @Select(AuthState.token) token$!: Observable<string | null>;
  
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.isAuthenticated$.subscribe(data => {
            if (data) {
                return true;
            }
            this.router.navigate(['login'])
            return false;
        })
    }

}
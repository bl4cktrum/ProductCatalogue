import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Login,Logout,Register, Relogin } from './auth.actions';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateModel } from '../models/auth-state-model';
import { Router } from '@angular/router';

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
      token: null,
      mail: null
    }
  })
  @Injectable()
  export class AuthState {
    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }
  
    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }
  
    constructor(private authService: AuthService, private router:Router) {}
  
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
      this.authService.login(action.payload).subscribe((data: Observable<any>) => {
        if (!(data instanceof Observable<any> )) {
          ctx.patchState({
            token: data,
            mail: action.payload.mail
          });
          if(action.payload.rememberMe== true){
            localStorage.setItem('mail',action.payload.mail);
            localStorage.setItem('token',data);
          }
          setTimeout(()=>{
            this.router.navigate(['']);
          },400)
        }
      })
    }

    @Action(Relogin)
    relogin(ctx: StateContext<AuthStateModel>) {
      let token = localStorage.getItem('token');
      let mail = localStorage.getItem('mail');
      ctx.setState({
        token: token,
        mail: mail
      })
      this.router.navigate(['']);
    }
  
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
      ctx.setState({
        token: null,
        mail: null
      })
      localStorage.removeItem('mail');
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }

    @Action(Register)
    register(ctx: StateContext<AuthStateModel>, action: Register) {
      this.authService.register(action.payload).subscribe((data: Observable<any>) => {
        data.subscribe(accessToken => {
          if (!(accessToken instanceof Observable<never> )) {
            ctx.patchState({
              token: accessToken,
              mail: action.payload.mail
            });
            setTimeout(()=>{
              this.router.navigate(['']);
            },400)
          }
        })
      })
    }
  }
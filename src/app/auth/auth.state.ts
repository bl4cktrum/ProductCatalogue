import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Login,Logout,Register } from './auth.actions';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateModel } from '../models/auth-state-model';

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
  
    constructor(private authService: AuthService) {}
  
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
      return this.authService.login(action.payload).pipe(
        tap((result: {token: string} | any) => {
          ctx.patchState({
            token: result.token,
            mail: action.payload.mail
          });
        })
      );
    }
  
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
      const state = ctx.getState();
      return this.authService.logout().pipe(
        tap(() => {
          ctx.setState({
            token: null,
            mail: null
          });
        })
      );
    }

    @Action(Register)
    register(ctx: StateContext<AuthStateModel>, action: Register) {
      return this.authService.register(action.payload).pipe(
        tap((result: { token: string | any}) => {
          ctx.patchState({
            token: result.token,
            mail: action.payload.mail
          });
        })
      );
    }
  }
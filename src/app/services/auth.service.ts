import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AuthStateModel } from '../models/auth-state-model';


@Injectable()
export class AuthService {
  constructor(private store: Store) {}

  login(payload:{mail:string, password:string}): Observable<AuthStateModel> {
    //TODO    

    return of();
  }
  logout():Observable<AuthStateModel> {
    //TODO
    return of(); 
  }
  register(payload:{name:string, surname:string,phoneNumber:number, mail:string, password:string, accessToken:string}) : Observable<AuthStateModel> {
    //TODO 
    return of();
  }
}
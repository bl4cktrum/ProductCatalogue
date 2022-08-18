import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AuthStateModel } from '../models/auth-state-model';


@Injectable()
export class AuthService {
  constructor(private store: Store) {}

  login(payload:{username:string, password:string}): Observable<AuthStateModel> {
    //TODO    

    return of();
  }
  logout():Observable<AuthStateModel> {
    //TODO
    return of(); 
  }
  register(payload:{username:string, password:string, email:string}) : Observable<AuthStateModel> {
    //TODO 
    return of();
  }
}
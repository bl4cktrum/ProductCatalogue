import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of , tap, catchError, throwError } from 'rxjs';
import { AuthStateModel } from '../models/auth-state-model';
import { User } from '../models/user-model';


@Injectable()
export class AuthService {
  constructor(private store: Store, private http: HttpClient) {}
  apiURL = 'http://localhost:3000/';

  login(payload:{mail:string, password:string}): Observable<AuthStateModel> {
    
    //TODO    
    this.http.get<User[]>(this.apiURL+'user?mail='+payload.mail).subscribe(response => {
      if (response[0] === undefined) {
        //there is no account registered with this mail.
        //Set ui element for error;
        console.log('there is no account registered with this mail.');
        
      }
      else {
        if(payload.password === response[0]['password']){
          //logon successfully
          console.log('ok');
        }
        else
          //Set ui element for error;
          console.log('wrong password');
      }
    })
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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of , tap, catchError, throwError, map, EMPTY, throttleTime } from 'rxjs';
import { User } from '../models/user-model';


@Injectable()
export class AuthService {
  constructor(private store: Store, private http: HttpClient) {}
  apiURL = 'http://localhost:3000/';

  login(payload:{mail:string, password:string}): Observable<any> {
    //TODO    
    return this.http.get<User[]>(this.apiURL+'user?mail='+payload.mail).pipe(map(response => {
      if (response[0] === undefined) {
        //there is no account registered with this mail.
        //Set ui element for error;
        console.log('there is no account registered with this mail.');
        return;
      }
      else {
        if(payload.password === response[0]['password']){
          //logon successfully
          console.log("logon successfully");
          const at:String = response[0]['accessToken'];
          return at;
        }
        else{
          //Set ui element for error;
          console.log('wrong password');
          return;
        }
      }
    }))
  }

  register(payload:{name:string, surname:string,phoneNumber:number, mail:string, password:string, accessToken:string}) : Observable<any> {
    return this.http.get<User[]>(this.apiURL + 'user?mail=' + payload.mail).pipe(map(response => {
      if (response[0] === undefined) {
        //there is no account registered with this mail.
        //REGISTER IN HERE
        let headers = new HttpHeaders({ 'Content-type': 'application/json' });
        return this.http.post<User>(this.apiURL + 'user', payload, { headers: headers }).pipe(map(InnerResponse => {
          const at: String = InnerResponse['accessToken'];
          return at;
        }));
      }
      else {
        //Set ui element for error;
        console.log('There is already an account registered with this mail.');
        return EMPTY;
      }
    }), catchError((err, caught) => {
      return EMPTY;
    }))
  }
}
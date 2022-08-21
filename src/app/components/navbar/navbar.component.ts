import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Logout } from 'src/app/auth/auth.actions';
import { AuthState } from 'src/app/auth/auth.state';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store:Store,private router:Router) { }

  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
  @Select(AuthState.token) token$!: Observable<string | null>;
  
  ngOnInit(): void {
  }

  logout(){
    console.log('there');
    
    this.store.dispatch(new Logout()).subscribe();
    this.router.navigate(['login']);
  }
}

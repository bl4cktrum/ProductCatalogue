import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { Login, Logout } from "src/app/auth/auth.actions"
import { AuthState } from 'src/app/auth/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private store:Store) {
  }
  
  loginForm!:FormGroup;
  submitted!:boolean;
  
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
  @Select(AuthState.token) token$!: Observable<string | null>;
  
  // This functions was created for development env. 
  checkToken(){
    // this.store.select(state => state.auth).subscribe(data => {console.log(data)});
    for (var i = 0, len = 500; i < len; i += 1) {
      ((i: number) => {
        setInterval(() => {
          this.isAuthenticated$.subscribe(console.log)
          this.token$.subscribe(console.log);
        }, 1500)
      })(1);
     }
    this.isAuthenticated$.subscribe(console.log)
    this.token$.subscribe(console.log)
  }

  logout(){
    this.store.dispatch(new Logout()).subscribe();
  }
  
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      mail:['',[
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern("^[0-9a-zA-Z]+$")
      ]]
    },{updateOn: 'submit'})   
  }
  
  ngOnInit(): void {
    this.submitted = false;
    this.createLoginForm();

  }

  login(){
    // a bug fix to prevent 'mail required' error at initiating login compenent.
    this.submitted= true;
    
    if (this.loginForm.invalid) {
      //Do nothing when form is INVALID
      return;
    }
    else{
      this.store.dispatch(new Login({
        mail: this.loginForm.get('mail')?.value,
        password: this.loginForm.get('password')?.value
      })).subscribe()
    }
  }
}

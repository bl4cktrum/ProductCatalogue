import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login, Relogin } from "src/app/auth/auth.actions"
import { AuthState } from 'src/app/auth/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private store:Store) {
    this.relogin();
  }
  
  loginForm!:FormGroup;
  submitted!:boolean;
  rememberMe!:boolean;
  
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
    this.rememberMe = false;
    this.createLoginForm();
  }

  relogin(){
    if(localStorage.getItem('mail')&&localStorage.getItem('token')){
      this.store.dispatch(new Relogin()).subscribe();
    }
  }

  rememberMeChange(){
    this.rememberMe = !this.rememberMe;
    console.log(this.rememberMe);
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
        password: this.loginForm.get('password')?.value,
        rememberMe: this.rememberMe
      })).subscribe()
    }
  }

  
}

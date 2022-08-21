import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from "src/app/auth/auth.actions"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private store:Store) { }

  loginForm!:FormGroup;
  submitted!:boolean;

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
    this.submitted= true;
    
    if (this.loginForm.invalid) {
      //TODO
      //INVALID form
      return;
    }
    //TODO
    //valid area
    else{
      this.store.dispatch(new Login({
        mail: this.loginForm.get('mail')?.value,
        password: this.loginForm.get('password')?.value
      }))
    }

    
  }

}

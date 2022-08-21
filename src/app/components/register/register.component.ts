import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Register } from 'src/app/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private store:Store) { }

  registerForm!:FormGroup;
  submitted!:boolean;

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name:['',[
        Validators.required,
      ]],
      surname:['',[
        Validators.required
      ]],
      phoneNumber:['',[
        Validators.required,
        Validators.pattern("^[0-9]{11,12}$")
      ]],
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
    },
    {
      updateOn: 'submit'
    })   

  }
  
  ngOnInit(): void {
    this.submitted = false;
    this.createRegisterForm();
    
  }

  register(){
    // a bug fix to prevent 'mail required' error at initiating login compenent.
    this.submitted= true;
    
    if (this.registerForm.invalid) {
      //Do nothing when form is INVALID
      return;
    }
    else{
      this.store.dispatch(new Register({
        mail: this.registerForm.get('mail')?.value,
        password: this.registerForm.get('password')?.value,
        name: this.registerForm.get('name')?.value,
        surname: this.registerForm.get('surname')?.value,
        phoneNumber: this.registerForm.get('phoneNumber')?.value,
        accessToken: this.createToken()
      })).subscribe()
    }
  }
  

  createToken(){
    return Date.now().toString(36) + Math.random().toString(36) + Date.now().toString(36)+Math.random().toString(36)+Math.random().toString(36);
  }
}

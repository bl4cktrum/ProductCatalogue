import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

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
    this.submitted= true;
    
    if (this.registerForm.invalid) {
      //TODO
      console.log("INVALID");
      return;
    }
    //TODO
    console.log("VALID");
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder) { 
  	this.createForm();
  }

  createForm() {
     this.form = this.formBuilder.group({
       email: ['', Validators.required],
       username: ['', Validators.required],
       firstname: ['', Validators.required],
       lastname: ['', Validators.required],
       phonenumber: ['', Validators.required],
       password: ['', Validators.required],
       repassword: ['',Validators.required]
     });
   }

   onLoginSubmit() {
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      phonenumber: this.form.get('phonenumber').value,
      password: this.form.get('password').value
    };
    console.log(user);
   }


  ngOnInit() {
  }

}

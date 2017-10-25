import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { 
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
      password: this.form.get('password').value,
      repassword: this.form.get('repassword').value
    };

    this.authService.registerUser(user).subscribe(data => {
      if (data == "0") {
        ;
      } else if (data == "1") {
        ;
      } else if (data == "2") {
        ;
      } else if (data == "3") {
        ;
      } else if (data == "4") {
        ;
      } else if (data == "5") {
        ;
      } else {
        this.router.navigate(['/']);
      }
    });

    console.log(user);
   }


  ngOnInit() {
  }

}

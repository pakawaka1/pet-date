import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form;
  processing;

  constructor(
    private formBuilder: FormBuilder

  ) {
    this.createForm();
   }

   createForm() {
     this.form = this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', Validators.required],
     })
   }

   disableForm() {
     this.form.controls['email'].disable();
     this.form.controls['password'].disable();
   }

   enableForm() {
     this.form.controls['email'].enable();
     this.form.controls['password'].enable();
   }

   onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    console.log(user);
    this.processing = false;
    this.form.reset()
    this.enableForm();
   }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  valid_user: boolean = true;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      username: ['', Validators.required],
      organization: ['', Validators.required],
      designation:['', Validators.required],
      password : ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  register() {
    
  }
}

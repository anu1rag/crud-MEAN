import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../auth/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup;
  valid_user: boolean = true;
  registerSubscribe: any;
  constructor(private fb: FormBuilder, private http: CrudService, private router: Router) { }
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
    console.log(this.registerForm.value);
    this.http.registerUser(this.registerForm.value).subscribe(
      (response: any)=>{
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.http.setUser(response.data);
        this.router.navigate(['']);
    },
    (err)=>{
      
    });
  }
}

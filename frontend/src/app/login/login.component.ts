import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../auth/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  valid_user:boolean = true;
  message = 'Username or Password is wrong';
  constructor(private fb: FormBuilder, private http: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm(){
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    });
  }
  
  login(){
      this.http.getUserLogin(this.loginGroup.value).subscribe(
        (response: any)=>{
          console.log(response);
          localStorage.setItem('token', response.data);
          console.log(localStorage.getItem('token'));
          this.valid_user = true;
          this.router.navigate(['']);
      },
      (error)=>{
        console.log(error);
        this.valid_user = false;
      })
  }

  register() {
    this.router.navigate(['register']);
  }

}

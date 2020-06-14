import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../auth/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  valid_user:boolean = true;
  message = 'Username or Password is wrong';
  constructor(private fb: FormBuilder, private http: CrudService) { }

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
        (data)=>{
      },
      (error)=>{

      })
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../auth/crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateForm: FormGroup;
  states = [];
  constructor(private fb: FormBuilder, private http: CrudService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.http.getState().subscribe((response: any)=>{
      this.states = response.data;
    })
  }

  addState() {
    console.log(this.stateForm.value);
    this.http.postState(this.stateForm.value).subscribe((response:any)=>{
      console.log(response);
      this.states.push(response.data);
    })
  }

  initializeForm() {
    this.stateForm = this.fb.group({
      state_name : ['', Validators.required]
    })
  }

}

import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../auth/crud.service';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  childForm: FormGroup;
  tableForm: FormGroup;
  valid_user: boolean;
  states$: Observable<any[]>
  district$: Observable<any[]>
  childArray$: Observable<any[]>;
  table_keys:any[] = ['Name', 'Sex', 'DOB', "Father name", "Mother name", "State", "District"]
  child_keys: any[] = [];
  pageLimitArray: number[];
  childProfile:any;
  table_view: boolean = true;
  environment = environment;
  constructor(private fb: FormBuilder, private http: CrudService) { }

  ngOnInit(): void {
    this.getStates();
    this.initializeTableForm();
    this.initializeForm();
    this.pageLimitArray = Array(10).fill(1).map((x,i)=>i+1);
    this.setLimit();
    this.child_keys = Object.keys(this.childForm.value);
    
  }

  initializeForm() {
    this.childForm = this.fb.group({
      name: '',
      sex: '',
      dob: '',
      mother_name: '',
      father_name: '',
      state_id: '',
      district_id: '',
      photo: ''
    });
    
  }

  initializeTableForm() {
    this.tableForm = this.fb.group({
      limit: 10,
      pages: 0
    })
  }


  submit() {
    console.log(this.childForm);
    const uploadData = new FormData();
    for(let key of Object.keys(this.childForm.value)) {
      uploadData.append(key,this.childForm.value[key]);
    }
    this.http.postChild(uploadData).subscribe((response)=>{
      console.log(response);
    });
  }

  onFileSelect(event) {
    console.log(event.target);
    console.log(event.target.files);
    console.log(event.target.file);
    this.childForm.get('photo').setValue(event.target.files[0]);
  }

  getDistrict() {
    let value = this.childForm.value.state_id;
    this.district$=  this.http.getDistrictByState(value)
  }

  getStates() {
    this.states$ =  this.http.getState();
  }

  setLimit() {
    this.childArray$ = this.http.getChild(this.tableForm.value);
  }

  full_view(value) {
     this.childProfile = value;
  }

  full_view_end() {
    this.childProfile = null;
  }

  removeTableView() {
    this.table_view = this.table_view ? false : true;
    console.log(this.table_view);
  }

}

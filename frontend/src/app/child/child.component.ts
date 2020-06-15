import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../auth/crud.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  
  childForm: FormGroup;
  valid_user: boolean;
  districts = [];
  states = [];
  filter_district = [];
  constructor(private fb: FormBuilder, private http: CrudService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
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


  submit() {
    console.log(this.childForm.value);
  }

  onFileSelect(event) {

  }

  getDistrict() {
    this.http.getDistrict().subscribe((response:any)=>{
      this.districts = response.data;
    },
    (err)=>{

    })
  }

  getStates() {
    this.http.getState().subscribe((response: any)=>{
      this.states = response.data;
    },
    (err)=>{

    })
  }

}

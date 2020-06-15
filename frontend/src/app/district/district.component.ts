import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../auth/crud.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  
  districtForm: FormGroup;
  districts = [];
  states = [];

  constructor(private fb: FormBuilder, private http: CrudService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getStates();
    this.getDistrict();
    
    
  }

  initializeForm() {
    this.districtForm = this.fb.group({
      state_id: '',
      district_name: ''
    });
  }

  addDistrict() {
    this.http.postDistrict(this.districtForm.value).subscribe((response: any)=>{
      console.log(response.data);
      this.getDistrict();
      
    },
    (err)=>{

    })
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

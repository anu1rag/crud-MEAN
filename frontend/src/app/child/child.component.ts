import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../auth/crud.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  childForm: FormGroup;
  valid_user: boolean;
  states$: Observable<any[]>
  district$: Observable<any[]>
  constructor(private fb: FormBuilder, private http: CrudService) { }

  ngOnInit(): void {
    this.getStates();
    this.initializeForm();
    
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

}

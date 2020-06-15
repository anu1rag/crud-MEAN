import { Component, OnInit } from '@angular/core';
import { CrudService } from '../auth/crud.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private http: CrudService) { }

  ngOnInit(): void {
   
  }

  addState() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../auth/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any = {};

  constructor(private http: CrudService) {}

  ngOnInit(): void {
    this.data = this.http.getUser();
    console.log(this.data);
  }

}

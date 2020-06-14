import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = {
    name: 'Ramesh Prakash',
    organization: 'Bal Vikas',
    designation : 'Cluster Coordinator'
  }
  constructor() {}

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('https://hrtaskapi.dhwaniris.in/index.php/api/master/get-state',{
    //   headers:{}
    // })
    //     .subscribe((data)=>{
    //       console.log(data);
    //     });
  }

  addState() {
    
  }

}

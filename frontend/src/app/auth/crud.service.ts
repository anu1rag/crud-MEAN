import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  api = environment.url;
  constructor(private http: HttpClient) { 
  }

  getUserLogin(value) {
    return this.http.post(`${this.api}/user/login`,value);
  }

  getUserLogout() {
    return this.http.get(`${this.api}/user/logout`);
  }

  getState() {
    return this.http.get(`${this.api}/master/get-state`);
  }

  postState(value) {
    return this.http.post(`${this.api}/state/create`,value);
  }

  getDistrict(value, id) {
    return this.http.get(`${this.api}/master/get-district`,{
      params:{state_id: id}
    });
  }

  postDistrict(value) {
    return this.http.post(`${this.api}/district/create`,value);
  }

  getChild() {
    return this.http.get(`${this.api}/beneficiary/get-child-profile`);
  }

  postChild(value) {
    return this.http.post(`${this.api}/beneficiary/child-profile-create`,value);
  }

  postFile() {

  }

  changeFile() {
    
  }

}

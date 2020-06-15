import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  api = environment.url;
  _user: any;
  constructor(private http: HttpClient) { 
  }


  getUserLogin(value) {
    return this.http.post(`${this.api}/user/login`,value);
  }

  getUserLogout() {
    return this.http.get(`${this.api}/user/logout`);
  }

  getUserRegister(value) {
    return this.http.post(`${this.api}/user/register`,value);
  }

  getState() {
    return this.http.get(`${this.api}/state/get-state`);
  }

  postState(value) {
    return this.http.post(`${this.api}/state/create`,value);
  }

  getDistrict(id) {
    return this.http.get(`${this.api}/district/get-district`,{
      params:{state_id: id}
    });
  }

  postDistrict(value) {
    return this.http.post(`${this.api}/district/create`,value);
  }

  getChild() {
    return this.http.get(`${this.api}/child/get-all-child`);
  }
  getChildByDistrict(district_id) {
    return this.http.get(`${this.api}/child/get-child-by-district`,{
      params: {
        district_id : district_id
      }
    })
  }
  postChild(value) {
    return this.http.post(`${this.api}/child/create`,value);
  }

  postFile() {

  }

  changeFile() {
    
  }

  registerUser(value) {
    return this.http.post(`${this.api}/user/register`,value);
  }

  setUser(value) {
    this._user = value;
  }

  getUser() {
    return this._user;
  }

}

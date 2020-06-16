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
    return this.http.get<any[]>(`${this.api}/state/get-state`);
  }

  postState(value) {
    return this.http.post(`${this.api}/state/create`,value);
  }

  getDistrict() {
    return this.http.get(`${this.api}/district/get-district`);
  }

  postDistrict(value) {
    return this.http.post(`${this.api}/district/create`,value);
  }

  getChild(limit, pages) {
    return this.http.get(`${this.api}/child/get-all-child`, {
      params : {
        limit: limit,
        pages: pages
      }
    });
  }
  getChildByDistrict(district_id) {
    return this.http.get(`${this.api}/child/get-child-by-district`,{
      params: {
        district_id : district_id
      }
    })
  }

  getDistrictByState(state_id) {
    console.log(state_id);
    return this.http.get<any[]>(`${this.api}/district/get-district-by-state`,{
      params: {
        state_id : state_id
      }
    })
  }

  postChild(value) {
    return this.http.post(`${this.api}/child/create`,value);
  }

  registerUser(value) {
    return this.http.post(`${this.api}/user/register`,value);
  }

  setUser(value) {
    this._user = value;
    console.log(this._user);
  }

  getUser() {
    return this._user;
  }

  getUserByToken(token) {
    return this.http.get(`${this.api}/user/get-user-by-token`,{
      params: {
        token : token
      }
    })
  }


}

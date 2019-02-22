import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any = [];
  userName = '';
  isLogged:any = false;
  constructor() { }

  setUser(userData:any) {
    this.users.push(userData);
  }

  getUser() {
    return this.users;
  }
  
  setUserName(name:any=''){
    if(name == '')
      return this.userName;
    this.userName = name;
    return this.userName;
  }

  setStatus(status:any){
    this.isLogged = status;
  }

  getStatus(){
    return this.isLogged;
  }
}

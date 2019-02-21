import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any = [];
  constructor() { }

  setUser(userData:any) {
    this.users.push(userData);
  }

  getUser() {
    return this.users;
  }
}

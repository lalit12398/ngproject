import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private users: UsersService
  ) { }

  userName = this.users.setUserName();

  ngOnInit() {
    console.log(this.userName);
  }

}

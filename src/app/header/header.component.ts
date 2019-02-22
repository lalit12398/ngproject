import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private users: UsersService,
    private router: Router
  ) { }

  userName = this.users.setUserName();

  ngOnInit() {
    console.log(this.userName);
  }
  logOut(){
		this.users.setStatus(false);
		this.router.navigate(['/login']);
	}

}

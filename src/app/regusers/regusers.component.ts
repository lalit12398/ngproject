import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-regusers',
  templateUrl: './regusers.component.html',
  styleUrls: ['./regusers.component.css']
})
export class RegusersComponent implements OnInit {

  constructor(
    private users: UsersService
  ) { }

  userData = this.users.getUser();

  ngOnInit() {
    console.log(this.userData);
  }

}

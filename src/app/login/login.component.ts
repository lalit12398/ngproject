import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm : FormGroup;
	submitted = false;
	constructor(
		public builder : FormBuilder,
		public router : Router,
		public users: UsersService
		) {

	}

	ngOnInit() {
		this.loginForm = this.builder.group({
			email: ['', [Validators.required, Validators.email]],
			pass: ['', Validators.required]
		});
	}

	get f(){
		return this.loginForm.controls;
	}

	login(){
		this.submitted = true;
		
		// get form input values
		const email = this.loginForm.controls.email.value;
		const password = this.loginForm.controls.pass.value;

		// get user data from user service
		let userData = this.users.getUser();

		// check if user exist in user data and pass to home if true
		let userExist = userData.find(point => {
			if(point.email === email && point.pass === password)
			this.router.navigate(['/home']);
			else
			this.router.navigate(['/login']);
			return true;
		});
	}

}

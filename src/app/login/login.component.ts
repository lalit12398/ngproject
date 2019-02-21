import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { from } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm : FormGroup;
	submitted = false;
<<<<<<< HEAD:src/app/login/login_old.component.ts
	user = [
	{email: "lalit@yopmail.com", pass: "Qwerty@123"},
	{email: "swapy@yopmail.com", pass: "Qwerty@123"},
	];

	constructor(public builder : FormBuilder, public router : Router) {
=======
	constructor(
		public builder : FormBuilder,
		public router : Router,
		public users: UsersService
		) {
>>>>>>> 55122c371313250810dd9a26a2ccbd8a6db436f6:src/app/login/login.component.ts

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
		const email = this.loginForm.controls.email.value;
		const password = this.loginForm.controls.pass.value;

		let isLogged = false;
		console.log(`${email}
			${password}
			${isLogged}`);
	}

}

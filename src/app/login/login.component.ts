import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm : FormGroup;
	submitted = false;
	user = [
	{email: "lalit@yopmail.com", pass: "Qwerty@123"},
	{email: "swapy@yopmail.com", pass: "Qwerty@123"},
	];
	constructor(public builder : FormBuilder, public router : Router) {

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
		let loggedUser = this.user.find( data => {
			if (data.email === email && data.pass === password ) {
				isLogged = true;
				this.router.navigate(['/home']);
			}
			this.router.navigate(['/login']);
			return true;
		})
		console.log(this.user);
		console.log(`${email}
			${password}
			${isLogged}`);
	}

}

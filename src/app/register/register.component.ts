import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { from } from 'rxjs';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	regForm : FormGroup;
	submitted = false;

	constructor(
		public builder : FormBuilder,
		public users: UsersService,
		public router: Router
		) {}

	ngOnInit() {

		this.regForm = this.builder.group({
			fname: ['', Validators.required],
			lname: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]],
			pass: ['', Validators.required],
			cpass: ['', Validators.required]
		})
	}

	get f() {
		return this.regForm.controls;
	}

	register() {
		this.submitted = true;
		this.users.setUser(this.regForm.value);
		this.router.navigate(["/login"]);
		console.log(this.regForm.value);
	}

}

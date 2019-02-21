import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	regForm : FormGroup;
	submitted = false;

	constructor(public builder : FormBuilder, public users: UsersService) { }

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

		console.log(this.regForm.controls);
	}

}

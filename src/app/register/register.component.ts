import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	regForm : FormGroup;
	submitted = false;

	constructor(public builder : FormBuilder) { }

	ngOnInit() {

		this.regForm = this.builder.group({
			fname: ['', Validators.required],
			lname: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]]
		})
	}

}

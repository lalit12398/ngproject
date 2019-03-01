import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RegusersComponent } from './regusers/regusers.component';
import { AuthGuard } from './guard/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
	{path: '', component: RegisterComponent },
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomeComponent, canActivate:[AuthGuard], children:[
		{path: '', redirectTo: "registered-users", pathMatch: "full"},
		{path: 'about', component: AboutComponent},
		{path: 'registered-users', component: RegusersComponent},
		{path: 'contact', component: ContactComponent},
		{path: 'products', component: ProductsComponent}
	]},
	{path: 'register', component: RegisterComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

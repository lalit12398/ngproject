import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegusersComponent } from './regusers/regusers.component';
import { ContactComponent } from './contact/contact.component';
import { TextTransform } from './directives/text-transform.directive';
import { Search } from './pipes/search.pipe';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SidebarComponent,
    RegusersComponent,
    ContactComponent,
    TextTransform,
    Search,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

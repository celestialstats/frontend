import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register.component';
import { UserLoginComponent } from './user/user-login.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		UserRegisterComponent,
		UserLoginComponent,
		HomeComponent
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

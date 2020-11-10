import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomnavbarComponent } from './customnavbar/customnavbar.component';
import { HomeComponent } from './home/home.component';
import { ListappComponent } from './listapp/listapp.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login/login.component';


@NgModule({
   declarations: [
      AppComponent,
      CustomnavbarComponent,
	 
      HomeComponent,
      ListappComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
	  ReactiveFormsModule,
	  FormsModule,
	  HttpClientModule,
      AppRoutingModule
   ],
   providers: [
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	 fakeBackendProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

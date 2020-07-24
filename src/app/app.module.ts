import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomnavbarComponent } from './customnavbar/customnavbar.component';
import { HomeComponent } from './home/home.component';
import { ListappComponent } from './listapp/listapp.component';

@NgModule({
   declarations: [
      AppComponent,
      CustomnavbarComponent,
      HomeComponent,
      ListappComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

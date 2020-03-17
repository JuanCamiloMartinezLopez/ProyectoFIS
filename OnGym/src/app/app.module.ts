import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { RutinaComponent } from './rutina/rutina.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {LoginService} from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    RutinaComponent,
    EjercicioComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

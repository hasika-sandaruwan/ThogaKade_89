import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationContextComponent } from './core/authentication/authentication-context/authentication-context.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { SignUpComponent } from './core/authentication/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationContextComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

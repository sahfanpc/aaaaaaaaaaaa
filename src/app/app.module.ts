import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { CompleteComponent } from './complete/complete.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Otp1Component } from './otp1/otp1.component';
import { ForgotComponent } from './forgot/forgot.component';
import { EmailComponent } from './email/email.component';
import { ResetComponent } from './reset/reset.component';
import { Complete1Component } from './complete1/complete1.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OtpComponent,
    CompleteComponent,
    LoginComponent,
    Otp1Component,
    ForgotComponent,
    EmailComponent,
    ResetComponent,
    Complete1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

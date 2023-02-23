import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Complete1Component } from './complete1/complete1.component';
import { EmailComponent } from './email/email.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { Otp1Component } from './otp1/otp1.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'otp1', component: Otp1Component },
  { path: 'forgot', component: ForgotComponent },
  { path: 'email', component: EmailComponent },
  { path: 'reset', component: ResetComponent },
  {path:'complete1',component: Complete1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

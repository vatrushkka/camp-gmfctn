// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AuthComponent }  from "@app/modules/+auth/auth.component";

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent
  ],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }

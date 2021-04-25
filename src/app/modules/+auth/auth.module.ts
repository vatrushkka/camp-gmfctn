// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from "@app/modules/+auth/components/sign-in/sign-in.component";

//components

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import {AuthComponent} from "@app/modules/+auth/auth.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    // RouterModule.forChild([{
    //   path: '',
    //   component: AuthComponent
    // }])
  ]
})
export class AuthRoutingModule { }

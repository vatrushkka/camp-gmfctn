// modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './modules/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class CoreModule {
}

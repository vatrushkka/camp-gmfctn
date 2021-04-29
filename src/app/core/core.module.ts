// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule {
}

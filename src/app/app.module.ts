import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BadgesComponent } from './modules/badges/badges.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

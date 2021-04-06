import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material/material.module';
import { HeaderRoutingModule } from './header-routing.module';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header.component';





@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    UserComponent
  ],

  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    HeaderRoutingModule
  ],

  exports: [
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    UserComponent
  ]
})
export class HeaderModule { }

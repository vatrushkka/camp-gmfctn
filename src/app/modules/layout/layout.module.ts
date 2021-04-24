// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfileEditModalModule } from "src/app/shared/modals/modules/profile-edit-modal/profile-edit-modal.module";

// components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ProfileEditModalModule
  ]
})
export class LayoutModule { }

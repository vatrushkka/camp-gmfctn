// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

// components
import { OtherUserModalComponent } from './other-user-modal.component';

@NgModule({
  declarations: [
    OtherUserModalComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class OtherUserModalModule { }

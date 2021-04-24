// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';

// components
import { ProfileEditModalComponent } from './profile-edit-modal.component';

@NgModule({
  declarations: [
    ProfileEditModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    ProfileEditModalComponent
  ]
})
export class ProfileEditModalModule { }

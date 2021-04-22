// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AchievementAssignModalComponent } from './achievement-assign-modal.component';

@NgModule({
  declarations: [
    AchievementAssignModalComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AchievementAssignModalModule { }

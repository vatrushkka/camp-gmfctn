// modules
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import {AchievementAssignModalComponent} from './achievement-assign-modal.component';
import {AchievementAssignFormComponent} from './achievement-assign-form/achievement-assign-form.component';

@NgModule({
  declarations: [
    AchievementAssignModalComponent,
    AchievementAssignFormComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AchievementAssignModalModule { }

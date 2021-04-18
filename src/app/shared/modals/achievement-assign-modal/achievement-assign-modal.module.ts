// modules
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// components
import {AchievementAssignModalComponent} from './achievement-assign-modal.component';
import {AchievementAssignFormComponent} from './achievement-assign-form/achievement-assign-form.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AchievementAssignModalComponent,
    AchievementAssignFormComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule
  ]
})
export class AchievementAssignModalModule { }

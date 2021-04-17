// modules
import { NgModule } from '@angular/core';
import {MaterialModule} from 'src/app/shared/modules/material/material.module';

// components
import {AchievementAssignModalComponent} from './achievement-assign-modal.component';

@NgModule({
  declarations: [
    AchievementAssignModalComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class AchievementAssignModalModule { }

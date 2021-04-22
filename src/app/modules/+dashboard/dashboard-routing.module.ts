import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OtherUserModalModule } from '../../shared/modals/other-user-modal/other-user-modal.module';
import {AchievementAssignModalComponent} from '../../shared/modals/achievement-assign-modal/achievement-assign-modal.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent
    }]),
    OtherUserModalModule
  ]
})
export class DashboardRoutingModule { }

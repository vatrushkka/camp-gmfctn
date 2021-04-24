// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesRoutingModule } from './badges-routing.module';
import { ThankYouModule } from 'src/app/shared/modules/thank-you.module';
import { DatePipeModule } from 'src/app/core/pipes/date-pipe/date-pipe.module';
import { AchievementAssignModalModule } from 'src/app/shared/modals/modules/achievement-assign-modal/achievement-assign-modal.module';
import { ProfileEditModalModule } from "src/app/shared/modals/modules/profile-edit-modal/profile-edit-modal.module";

// components
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
import { TotalAchievementsComponent } from './components/total-achievements/total-achievements.component';
import { UserComponent } from './components/user/user.component';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { BadgesComponent } from './badges.component';

@NgModule({
  declarations: [
    BadgesComponent,
    LastAchievementsComponent,
    TotalAchievementsComponent,
    UserComponent,
    AchievementsListComponent
  ],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    ThankYouModule,
    DatePipeModule,
    AchievementAssignModalModule,
    ProfileEditModalModule
  ]
})
export class BadgesModule { }

// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesRoutingModule } from './badges-routing.module';

// components
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
import { TotalAchievementsComponent } from './components/total-achievements/total-achievements.component';
import { UserComponent } from './components/user/user.component';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { BadgesComponent } from './badges.component';
import { ThankYouModule } from '../shared/modules/thank-you.module';

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
    ThankYouModule
  ]
})
export class BadgesModule { }

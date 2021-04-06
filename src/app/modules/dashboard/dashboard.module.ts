import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material/material.module';
import { RouterModule } from '@angular/router';



import { BadgesComponent } from './badges/badges.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { PersonalAchievementsComponent } from './personal-achievements/personal-achievements.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TopChartComponent } from './top-chart/top-chart.component';
import { ExoftAchievementsComponent } from './exoft-achievements/exoft-achievements.component';
import { HeaderRoutingModule } from 'src/app/shared/header/header-routing.module';



@NgModule({
  declarations: [
    BadgesComponent, 
    ChallengesComponent, 
    PersonalAchievementsComponent, 
    GreetingComponent, 
    ThankYouComponent, 
    TopChartComponent, 
    ExoftAchievementsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderRoutingModule

  ],
  exports: [
    BadgesComponent, 
    ChallengesComponent, 
    PersonalAchievementsComponent, 
    GreetingComponent, 
    ThankYouComponent, 
    TopChartComponent, 
    ExoftAchievementsComponent
  ]
})
export class DashboardModule { }


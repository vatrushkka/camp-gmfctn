// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material.module';

// components
import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    BadgesComponent,
    ChallengesComponent,
    PersonalAchievementsComponent,
    GreetingComponent,
    ThankYouComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }


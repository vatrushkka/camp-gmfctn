// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThankYouModule } from '../../shared/modules/thank-you.module';

// components
import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { DashboardComponent } from './dashboard.component';
import { PersonalAchievementsDatePipe } from '../../core/pipes/personal-achievements-date.pipe';

@NgModule({
  declarations: [
    BadgesComponent,
    ChallengesComponent,
    PersonalAchievementsComponent,
    GreetingComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    DashboardComponent,
    PersonalAchievementsDatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    ThankYouModule
  ]
})
export class DashboardModule { }

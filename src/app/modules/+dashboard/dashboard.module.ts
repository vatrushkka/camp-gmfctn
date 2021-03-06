// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThankYouModule } from 'src/app/shared/modules/thank-you.module';
import { DatePipeModule } from 'src/app/core/pipes/date-pipe/date-pipe.module';

// components
import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    BadgesComponent,
    ChallengesComponent,
    PersonalAchievementsComponent,
    GreetingComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    ThankYouModule,
    DatePipeModule
  ]
})
export class DashboardModule { }

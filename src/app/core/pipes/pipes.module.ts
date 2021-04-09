import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PersonalAchievementsDatePipe } from './personal-achievements-date.pipe';

@NgModule({
  declarations: [
    PersonalAchievementsDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalAchievementsDatePipe
  ]
})
export class PipesModule { }

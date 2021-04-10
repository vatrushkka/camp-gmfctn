import { Component } from '@angular/core';
import { achievements } from '../../data/exoftAchievementsData';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {
  achievements = achievements;
}

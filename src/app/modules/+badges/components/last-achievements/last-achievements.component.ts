import { Component } from '@angular/core';
import { achievements } from '../../../+dashboard/data/personal-achievements-data';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent {
  achievements = achievements;
}

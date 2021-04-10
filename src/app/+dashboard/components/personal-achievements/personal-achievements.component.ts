import { Component } from '@angular/core';
import { achievements } from '../../data/personal-achievements-data';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  achievements = achievements;
}

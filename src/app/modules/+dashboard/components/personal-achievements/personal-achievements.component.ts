import { Component } from '@angular/core';
import { achievements } from '../../data/personal-achievements-data';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  achievements = achievements;

  private sortedAchievements: { time: Date; }[] = achievements.sort((n1, n2) => {
    if (n1.time > n2.time) {
      return -1;
    }

    if (n1.time > n2.time) {
      return 1;
    }

    return 0;
  });
}

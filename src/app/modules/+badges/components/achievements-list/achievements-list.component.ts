import { Component } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.scss']
})
export class AchievementsListComponent {
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

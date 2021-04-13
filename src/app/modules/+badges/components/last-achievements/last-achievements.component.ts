import { Component } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent {
  public achievements = achievements.sort((n1, n2) => {
    if (n1.time > n2.time) {
      return -1;
    }

    if (n1.time > n2.time) {
      return 1;
    }

    return 0;
  });
}

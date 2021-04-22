import { Component } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';
import { MatDialog } from '@angular/material/dialog';
import { AchievementAssignModalComponent } from 'src/app/shared/modals/modules/achievement-assign-modal/achievement-assign-modal.component';

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

  constructor(public dialog: MatDialog) {}

  openRequest(): void {
    this.dialog.open(AchievementAssignModalComponent);
  }
}

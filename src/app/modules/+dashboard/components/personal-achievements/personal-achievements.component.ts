import { Component } from '@angular/core';
import { achievements } from '../../data/personal-achievements-data';
import { MatDialog } from '@angular/material/dialog';
import { AchievementAssignModalComponent } from 'src/app/shared/modals/modules/achievement-assign-modal/achievement-assign-modal.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
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

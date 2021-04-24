import { Component } from '@angular/core';
import { achievements } from '@dashboard/data/exoftAchievementsData';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserModalComponent } from '@shared/modals/modules/other-user-modal/other-user-modal.component';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {
  achievements = achievements;

  constructor(public dialog: MatDialog) {}

  openUser(user: User): void {
    this.dialog.open(OtherUserModalComponent, {
      data: {
        icon: user.icon,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userXP: user.xp
      }
    });
  }
}

import { Component } from '@angular/core';
import { achievements } from '../../data/exoftAchievementsData';
import {MatDialog} from '@angular/material/dialog';
import {AchievementAssignModalComponent} from '../../../../shared/modals/achievement-assign-modal/achievement-assign-modal.component';
import {OtherUserModalComponent} from '../../../../shared/modals/other-user-modal/other-user-modal.component';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {
  achievements = achievements;

  constructor(public dialog: MatDialog) {}

  openUser(): void {
    this.dialog.open(OtherUserModalComponent);
  }
}

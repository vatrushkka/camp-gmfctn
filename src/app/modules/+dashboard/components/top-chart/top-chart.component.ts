import { Component, OnInit } from '@angular/core';
import { users } from '../../data/topChartData';
import { MatDialog } from '@angular/material/dialog';
import {AchievementAssignModalComponent} from '../../../../shared/modals/achievement-assign-modal/achievement-assign-modal.component';
import {OtherUserModalComponent} from '../../../../shared/modals/other-user-modal/other-user-modal.component';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  public users = users.sort((n1, n2) => {
    if (n1.xp > n2.xp) {
      return -1;
    }

    if (n1.xp > n2.xp) {
      return 1;
    }

    return 0;
  });

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const maxLength = this.users[0]?.xp;

    this.users.forEach(user => {
      user.lengthXP = user.xp * 100 / maxLength;
    });
  }

  openUser(): void {
    this.dialog.open(OtherUserModalComponent);
  }
}

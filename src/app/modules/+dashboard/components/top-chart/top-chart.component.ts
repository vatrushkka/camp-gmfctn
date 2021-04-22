import { Component, OnInit } from '@angular/core';
import { users } from '../../data/topChartData';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserModalComponent } from 'src/app/shared/modals/modules/other-user-modal/other-user-modal.component';
import { User } from 'src/app/shared/models/user.model';

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

  openUser(user: User): void {
    this.dialog.open(OtherUserModalComponent, {
      data: {
        icon: user.icon,
        firstName: user.firstName,
        lastName: user.lastName,
        xp: user.xp
      }
    });
  }
}

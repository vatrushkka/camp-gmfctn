// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { users } from '../../data/topChartData';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  users = users.sort((n1, n2) => {
    if (n1.xp > n2.xp) {
      return -1;
    }

    if (n1.xp > n2.xp) {
      return 1;
    }

    return 0;
  });

  ngOnInit(): void {
    const maxLength = this.users[0]?.xp;

    this.users.forEach(user => {
      user.lengthXP = user.xp * 100 / maxLength;
    });
  }
}

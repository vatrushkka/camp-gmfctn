import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { ThanksModalComponent } from '../thanks-modal/thanks-modal.component';

@Component({
  selector: 'app-other-user-modal',
  templateUrl: './other-user-modal.component.html',
  styleUrls: ['./other-user-modal.component.scss']
})
export class OtherUserModalComponent {
  achievements = [
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Turbo Power',
      amount: 1
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Turbo Power',
      amount: 2
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Power',
      amount: 2
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Power',
      amount: 1
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Party Power',
      amount: 1
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Turbo Power',
      amount: 3
    },
    {
      img: '../assets/img/dashboard-img/badge.png',
      title: 'Exoft Turbo Power',
      amount: 2
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialog: MatDialog) { }

  openThanks(): void {
    this.dialog.open(ThanksModalComponent);
  }
}

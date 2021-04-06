import {Component} from '@angular/core';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  achievments = [
    {img: '../assets/img/dashboard-img/badge.png', title: 'Exoft Turbo Power', xp: 15, time: 3},
    {img: '../assets/img/dashboard-img/badge.png', title: 'Exoft Turbo Power', xp: 10, time: 3},
    {img: '../assets/img/dashboard-img/badge.png', title: 'Exoft Turbo Power', xp: 20, time: 7},
    {img: '../assets/img/dashboard-img/badge.png', title: 'Exoft Turbo Power', xp: 15, time: 15}
  ];
}

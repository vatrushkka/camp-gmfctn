import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {

  achievements = [
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'7',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'7',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'9',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'13',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'20',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'20',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'20',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'24',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'26',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'30',
      achName: 'Exoft turbo power'
    },
    {
      firstName: 'Zapam',
      lastName: 'Tskutka',
      img: '../assets/img/dashboard-img/cat.jpg',
      time:'47',
      achName: 'Exoft turbo power'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
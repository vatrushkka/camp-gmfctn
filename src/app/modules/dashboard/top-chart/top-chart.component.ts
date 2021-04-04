import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  users = [
    {icon: '../assets/dashboard-img/cat.jpg', firstName:'Zapam', lastName: 'Tskutka', xp:'47', color:'#32a852'},
    {icon: '../assets/dashboard-img/cat-avatar.jpeg', firstName:'Vasya', lastName: 'Petrov', xp:'386', color:'#3265a8'},
    {icon: '../assets/dashboard-img/avatar.jpg', firstName:'Vatrushka', lastName: 'Vart', xp:'137', color:'#a8324c'},
    {icon: '../assets/dashboard-img/cat-cat.jpg', firstName:'Valia', lastName: 'Val', xp:'39', color:'#8ca832'},
    {icon: '../assets/dashboard-img/cat-cat.jpg', firstName:'Apple', lastName: 'Corporation', xp:'248', color:'#a83232'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
}

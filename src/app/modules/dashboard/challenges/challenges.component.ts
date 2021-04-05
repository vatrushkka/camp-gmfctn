import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  available = [
    {chName:'10 cats', 
    img:'../assets/img/dashboard-img/badge.png',
    progress: '70',
    all: '10',
    remTime: '22.30.00'
  }
    
  ];

  ended = [
    {img:'',
    chName:'5k Swim'
  }
  ]


  constructor() { }

  ngOnInit(): void {

  }

}

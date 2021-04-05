import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  challenges = [
    {chName:'bv', img:[]},
    {chName:'fghjk', img:[]},
    {chName:'hgf', img:[]},
    {chName:'jjhg', img:[]}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

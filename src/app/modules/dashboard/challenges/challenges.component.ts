import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  available = [
    {chName:'10 cats', 
    img:'../assets/img/dashboard-img/cat-meme.jpg',
    progress: '70',
    total: '10 cats',
    remTime: '22.30.00'
  },
  {chName:'10 cats', 
    img:'../assets/img/dashboard-img/cat-meme.jpg',
    progress: '70',
    total: '10 cats',
    remTime: '22.30.00'
  }
    
  ];

  ended = [
    {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  },
  {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  },
  {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  },
  {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  },
  {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  },
  {img:'../assets/img/dashboard-img/catt.jpg',
    chName:'37 Cats'
  }
  ]


  constructor() { }

  ngOnInit(): void {

  }

}

import { Component } from '@angular/core';
import { availableChallenges, endedChallenges } from '../../data/challengesData';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent {
  public available = availableChallenges;
  public ended = endedChallenges;
}

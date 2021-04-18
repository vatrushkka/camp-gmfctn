import { Component } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';

@Component({
  selector: 'app-achievement-assign-form',
  templateUrl: './achievement-assign-form.component.html',
  styleUrls: ['./achievement-assign-form.component.scss']
})
export class AchievementAssignFormComponent {
  public achievements = achievements;
}

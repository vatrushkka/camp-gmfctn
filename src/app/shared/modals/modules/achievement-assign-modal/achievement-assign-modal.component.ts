import { Component } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-achievement-assign-modal',
  templateUrl: './achievement-assign-modal.component.html',
  styleUrls: ['./achievement-assign-modal.component.scss']
})
export class AchievementAssignModalComponent {
  public achievements = achievements;

  inputForm = new FormGroup({
    achievement: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  submit(): void {
    if (this.inputForm.valid) {
      alert('You requested an achievement');
    }
  }
}

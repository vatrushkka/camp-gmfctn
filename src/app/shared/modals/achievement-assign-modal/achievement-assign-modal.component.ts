import { Component, OnInit } from '@angular/core';
import { achievements } from 'src/app/modules/+dashboard/data/personal-achievements-data';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-achievement-assign-modal',
  templateUrl: './achievement-assign-modal.component.html',
  styleUrls: ['./achievement-assign-modal.component.scss']
})
export class AchievementAssignModalComponent implements OnInit {
  public achievements = achievements;

  inputForm = new FormGroup({
    achievement: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      achievement: this.fb.control('', Validators.required),
      message: this.fb.control('', Validators.required)
    });
  }

  submit(): void {
    if (this.inputForm.valid) {
      alert('You requested an achievement');
    }
  }
}

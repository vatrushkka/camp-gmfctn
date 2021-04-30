import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-thanks-modal',
  templateUrl: './thanks-modal.component.html',
  styleUrls: ['./thanks-modal.component.scss']
})
export class ThanksModalComponent {
  inputForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });
}

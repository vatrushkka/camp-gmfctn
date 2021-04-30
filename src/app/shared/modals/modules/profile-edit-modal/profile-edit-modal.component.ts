import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-modal',
  templateUrl: './profile-edit-modal.component.html',
  styleUrls: ['./profile-edit-modal.component.scss']
})
export class ProfileEditModalComponent {
  inputForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    eMail: new FormControl('', Validators.required),
    status: new FormControl('')
  });

  save(): void {
    if (this.inputForm.valid) {
      alert('Your changes saved');
    }
  }
}

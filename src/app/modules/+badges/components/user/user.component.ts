import { Component } from '@angular/core';
import { user } from '@shared/data/user-data';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditModalComponent } from '@shared/modals/modules/profile-edit-modal/profile-edit-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public user = user;

  constructor(public dialog: MatDialog) { }

  openEdit(): void {
    this.dialog.open(ProfileEditModalComponent);
  }
}

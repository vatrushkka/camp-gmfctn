import { Component } from '@angular/core';
import { UserInfo } from '@shared/data/user-data';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditModalComponent } from '@shared/modals/modules/profile-edit-modal/profile-edit-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  opened = false;
  public userInfo = UserInfo;

  constructor(public dialog: MatDialog) { }

  openEdit(): void {
    this.dialog.open(ProfileEditModalComponent);
  }
}

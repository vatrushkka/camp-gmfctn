import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProfileEditModalComponent} from "@shared/modals/modules/profile-edit-modal/profile-edit-modal.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) { }

  openEdit(): void {
    this.dialog.open(ProfileEditModalComponent);
  }
}

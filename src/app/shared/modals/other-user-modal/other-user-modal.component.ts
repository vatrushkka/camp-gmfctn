import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-other-user-modal',
  templateUrl: './other-user-modal.component.html',
  styleUrls: ['./other-user-modal.component.scss']
})
export class OtherUserModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private readonly matDialog: MatDialog) { }
}

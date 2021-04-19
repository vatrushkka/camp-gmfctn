import { Component } from '@angular/core';
import { user } from 'src/app/shared/data/user-data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public user = user;
}

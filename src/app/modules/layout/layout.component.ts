import { Component } from '@angular/core';
import {user} from '../../shared/data/user-data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  opened = false;
  public user = user;
}

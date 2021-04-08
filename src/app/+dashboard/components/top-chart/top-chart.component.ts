import { Component} from '@angular/core';
import { users } from '../../data/topChartData';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent {
  users = users;
  }

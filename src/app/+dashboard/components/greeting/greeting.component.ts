import {Component} from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {  

  public greeting = this.dayTime();

  dayTime(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 11) {
      return 'Good Morning, ';
    } else if (hour >= 12 && hour <= 17) {
      return 'Good Day, ';
    } else if (hour >= 18 && hour <= 23) {
      return 'Good Evening, ';
    } else {
      return 'Good Night, ';
    }
  }
}

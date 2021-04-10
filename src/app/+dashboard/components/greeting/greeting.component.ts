import {Component} from '@angular/core';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  greeting!: string;

  ngOnInit(): void {
    this.greeting = this.getDayTime();
  }
  private getDayTime(): string {
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

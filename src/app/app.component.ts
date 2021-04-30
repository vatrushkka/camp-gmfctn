import { Component, OnInit } from '@angular/core';
import { User } from "@shared/models/user.model";
import { Observable } from "rxjs";
import { SignInService } from "@shared/services/sign-in.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'camp-gmfctn';
  user$: Observable<User> | undefined;

  constructor(public SignInService: SignInService) { }

  ngOnInit(): void {
    this.user$ = this.SignInService.user$;
  }
}

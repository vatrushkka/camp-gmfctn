import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SignInService } from "@app/modules/+auth/services/sign-in.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authUserService: SignInService,
              private router: Router) { }

  onSubmit(): void {
    this.authUserService.authenticate(this.signInForm.value.username, this.signInForm.value.password)
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}

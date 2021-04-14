// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ThankYouComponent } from '../components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThankYouComponent
  ]
})
export class ThankYouModule { }

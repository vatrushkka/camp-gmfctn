// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { ThanksModalComponent } from './thanks-modal.component';

@NgModule({
  declarations: [
    ThanksModalComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ThanksModalModule { }

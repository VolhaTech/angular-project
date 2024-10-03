import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SignInModule { }

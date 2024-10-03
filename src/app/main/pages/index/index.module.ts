import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======== material components =========
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// ======== index page ==================
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,

    // ======== material components =========
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class IndexModule { }

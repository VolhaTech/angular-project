import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ========== main pages =========
import { IndexModule } from './pages/index/index.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MainRoutingModule,

    // ========== main pages =========
    IndexModule
  ]
})
export class MainModule { }

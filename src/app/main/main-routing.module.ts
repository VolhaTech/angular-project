import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ======== main pages ===========
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

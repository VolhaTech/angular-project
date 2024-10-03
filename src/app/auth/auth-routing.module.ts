import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

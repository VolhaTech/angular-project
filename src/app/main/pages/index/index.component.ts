import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'section[app-index]',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(private router: Router) { }

  protected handleNavigateSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  protected handleNavigateSignUp() {
    this.router.navigateByUrl('/auth/sign-up');
  }
}

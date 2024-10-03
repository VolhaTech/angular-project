import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { increment } from 'app/auth/store/auth.actions';
import { selectAuthSession } from 'app/auth/store/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'section[app-sign-in]',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  session: Observable<any | null>;

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private readonly fb: FormBuilder,
    private readonly store: Store) {
    this.session = this.store.select(selectAuthSession);
  }

  handleSignin() {
    this.store.dispatch(increment({ count: 1 }));
  }
}

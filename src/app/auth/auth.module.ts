import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthRepositoryService } from './repositories/auth-repository.service';

// ======= store ==============
import { authReducer } from './store/auth.reducer';
import * as authEffects from './store/auth.effects';

// ======= auth pages =========
import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { ForgotModule } from './pages/forgot/forgot.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,

    // ====== store ===========
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      authEffects
    ]),

    // ====== auth pages ======
    SignInModule,
    SignUpModule,
    ForgotModule
  ],
  providers: [AuthRepositoryService]
})
export class AuthModule { }

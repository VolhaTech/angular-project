import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthRepositoryService } from 'app/auth/repositories/auth-repository.service';
import { decrement, increment, reset } from './auth.actions';

export const signIn = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthRepositoryService)) => {
    return actions$.pipe(
      ofType(increment.type),
      exhaustMap(() =>
        authService.signIn().pipe(
          map((count: any) => decrement({ count })),
          catchError((error: { message: string }) => of(reset()))
        )
      )
    );
  },
  { functional: true }
);
import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset } from './auth.actions';
import { IAuthState } from './auth.state';

export const initialState: IAuthState = {
  session: 10,
};

export const authReducer = createReducer(
  initialState,
  on(increment, (state) => { console.log('increment'); return state; }),
  on(decrement, (state) => { console.log('decrement'); return state; }),
  on(reset, (state) => { console.log('reset'); return state; })
);
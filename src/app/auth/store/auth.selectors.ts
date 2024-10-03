import { createSelector } from '@ngrx/store';

const selectAuth = (state: any) => state.auth;

export const selectAuthSession = createSelector(selectAuth, (state: any) => state.session);

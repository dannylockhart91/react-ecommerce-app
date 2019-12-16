import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';
import { UserState } from './user.types';

const selectUserState = (state: AppState) => state.user;

export const getCurrentUser = createSelector(
    [selectUserState],
    (state: UserState) => state.currentUser
);

export const getIsAuthenticating = createSelector(
    [selectUserState],
    (state: UserState) => state.isLoading
);
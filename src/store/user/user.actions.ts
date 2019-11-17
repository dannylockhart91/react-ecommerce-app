import { UserActions, UserActionTypes } from "./user.types";


export const setCurrentUser = (user: object | null): UserActionTypes => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
});


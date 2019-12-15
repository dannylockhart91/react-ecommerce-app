import { UserActions, UserActionTypes } from "./user.types";


export const setCurrentUser = (user: object | null): UserActionTypes => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
});

export const googleSignIn = (): UserActionTypes => ({
    type: UserActions.GOOGLE_SIGN_IN
});

export const emailSignIn = (payload: { email: string, password: string }): UserActionTypes => ({
    type: UserActions.EMAIL_SIGN_IN,
    payload
});

export const signInSuccess = (user: any): UserActionTypes => ({
    type: UserActions.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailed = (error: any): UserActionTypes => ({
    type: UserActions.SIGN_IN_FAILED,
    payload: error
});

export const signOut = (): UserActionTypes => ({
    type: UserActions.SIGN_OUT
});

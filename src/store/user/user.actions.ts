import { UserActions, UserActionTypes } from "./user.types";

export const checkIsUserAuthenticated = (): UserActionTypes => ({
    type: UserActions.CHECK_IS_USER_AUTHENTICATED
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

export const signUp = (payload: { displayName: string, email: string, password: string }): UserActionTypes => ({
    type: UserActions.SIGN_UP,
    payload
});

export const signUpSuccess = (payload: { user: any, displayName: string }): UserActionTypes => ({
    type: UserActions.SIGN_UP_SUCCESS,
    payload
});

export const signUpFailed = (error: any): UserActionTypes => ({
    type: UserActions.SIGN_UP_FAILED,
    payload: error
});

export const signOut = (): UserActionTypes => ({
    type: UserActions.SIGN_OUT
});

export const signOutSuccess = (): UserActionTypes => ({
    type: UserActions.SIGN_OUT_SUCCESS
});

export const signOutFailed = (error: any): UserActionTypes => ({
    type: UserActions.SIGN_OUT_FAILED,
    payload: error
});

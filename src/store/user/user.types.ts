export interface UserState {
    currentUser: object | null,
    isLoading: boolean,
    signInError: object | any | null
}

export enum UserActions {
    EMAIL_SIGN_IN = '[Authentication] Email sign in',
    GOOGLE_SIGN_IN = '[Authentication] Google sign in',
    SIGN_IN_SUCCESS = '[Authentication] Sign in success',
    SIGN_IN_FAILED = '[Authentication] Sign in failed',
    SIGN_OUT = '[Authentication] Sign out',
    SIGN_OUT_SUCCESS = '[Authentication] Sign out success',
    SIGN_OUT_FAILED = '[Authentication] Sign out failed'
}

interface GoogleSignInAction {
    type: typeof UserActions.GOOGLE_SIGN_IN
}

interface EmailSignInAction {
    type: typeof UserActions.EMAIL_SIGN_IN
    payload: {
        email: string,
        password: string
    }
}

interface SignInSuccessAction {
    type: typeof UserActions.SIGN_IN_SUCCESS,
    payload: object | null
}

interface SignInFailedAction {
    type: typeof UserActions.SIGN_IN_FAILED,
    payload: object | null
}

interface SignOutAction {
    type: typeof UserActions.SIGN_OUT
}

interface SignOutSuccessAction {
    type: typeof UserActions.SIGN_OUT_SUCCESS
}

interface SignOutFailedAction {
    type: typeof UserActions.SIGN_OUT_FAILED,
    payload: object
}

export type UserActionTypes =
    GoogleSignInAction |
    SignInSuccessAction |
    SignInFailedAction |
    EmailSignInAction |
    SignOutAction |
    SignOutSuccessAction |
    SignOutFailedAction;

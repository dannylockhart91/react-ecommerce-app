export interface UserState {
    currentUser: object | null,
    signInError: object | any | null
}

export enum UserActions {
    SET_CURRENT_USER = '[Authentication] Set current user',
    EMAIL_SIGN_IN = '[Authentication] Email sign in',
    GOOGLE_SIGN_IN = '[Authentication] Google sign in',
    SIGN_IN_SUCCESS = '[Authentication] Sign in success',
    SIGN_IN_FAILED = '[Authentication] Sign in failed',
    SIGN_OUT = '[Authentication] Sign out'
}


interface SetCurrentUserAction {
    type: typeof UserActions.SET_CURRENT_USER,
    payload: object | null
}

interface GoogleSignInAction {
    type: typeof UserActions.GOOGLE_SIGN_IN
}

interface GoogleSignInSuccessAction {
    type: typeof UserActions.SIGN_IN_SUCCESS,
    payload: object | null
}

interface GoogleSignInFailedAction {
    type: typeof UserActions.SIGN_IN_FAILED,
    payload: object | null
}

interface EmailSignInAction {
    type: typeof UserActions.EMAIL_SIGN_IN
    payload: {
        email: string,
        password: string
    }
}

interface SignOutAction {
    type: typeof UserActions.SIGN_OUT
}

export type UserActionTypes =
    SetCurrentUserAction |
    GoogleSignInAction |
    GoogleSignInSuccessAction |
    GoogleSignInFailedAction |
    EmailSignInAction |
    SignOutAction;

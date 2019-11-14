export interface UserState {
    currentUser: object | null
}

export enum UserActions {
    SET_CURRENT_USER = 'SET_CURRENT_USER'
}


interface SetCurrentUserAction {
    type: typeof UserActions.SET_CURRENT_USER,
    payload: object | null
}

export type UserActionTypes = SetCurrentUserAction

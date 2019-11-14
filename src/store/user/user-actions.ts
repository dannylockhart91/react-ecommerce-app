export enum UserActionTypes {
    SetCurrentUser = '[User] Set Current User'
}

export const setCurrentUser = (user: any | null) => ({
    type: UserActionTypes.SetCurrentUser,
    payload: user
});


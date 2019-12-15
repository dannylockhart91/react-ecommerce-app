import { UserActions, UserActionTypes, UserState } from "./user.types";

const initialState: UserState = {
    currentUser: null,
    signInError: null
};

const userReducer = (state: UserState = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case UserActions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                signInError: null
            };
        case UserActions.SIGN_IN_FAILED:
            return {
                ...state,
                signInError: action.payload
            };
        case UserActions.SIGN_OUT:
            return {
                ...state,
                currentUser: null
            };
        default:
            return state;
    }
};

export default userReducer;

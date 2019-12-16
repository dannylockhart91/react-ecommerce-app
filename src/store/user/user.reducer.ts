import { UserActions, UserActionTypes, UserState } from "./user.types";

const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    signInError: null
};

const userReducer = (state: UserState = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case UserActions.GOOGLE_SIGN_IN:
        case UserActions.EMAIL_SIGN_IN:
            return {
                ...state,
                isLoading: true
            };
        case UserActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                signInError: null
            };
        case UserActions.SIGN_IN_FAILED:
            return {
                ...state,
                isLoading: false,
                signInError: action.payload
            };
        case UserActions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            };
        default:
            return state;
    }
};

export default userReducer;

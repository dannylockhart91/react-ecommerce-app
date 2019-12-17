import { UserActions, UserActionTypes, UserState } from "./user.types";

const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    authenticationError: null
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
                authenticationError: null
            };
        case UserActions.SIGN_IN_FAILED:
        case UserActions.SIGN_UP_FAILED:
        case UserActions.SIGN_OUT_FAILED:
            return {
                ...state,
                isLoading: false,
                authenticationError: action.payload
            };
        case UserActions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                authenticationError: null
            };
        default:
            return state;
    }
};

export default userReducer;

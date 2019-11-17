import { UserActions, UserActionTypes, UserState } from "./user.types";

const initialState: UserState = {
    currentUser: null
};

const userReducer = (state: UserState = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case UserActions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;

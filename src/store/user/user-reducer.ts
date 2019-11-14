import * as UserActions from './user-actions';

interface UserState {
    currentUser: any | null
}
const initialState: UserState = {
    currentUser: null
};

const userReducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case UserActions.UserActionTypes.SetCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;

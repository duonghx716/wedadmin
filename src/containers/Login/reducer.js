import { LOGIN_REQUEST, LOGIN_SUCCESS, CHANGE_SUCCESS } from "./action";

const initialState = {
    requesting: false,
    data: null,
    success: false,
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                requesting: true,
                success: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                requesting: false,
                data: action.data,
                success: true,
            };
        case CHANGE_SUCCESS:
            return {
                ...state,
                success: false,
            };

        default:
            return state;
    }
};

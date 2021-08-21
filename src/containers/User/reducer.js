import {
    SEEN_MESSENGER,
    SEEN_MESSENGER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
} from "./action";

const initialState = {
    requesting: false,
    data: null,
    err: null,
    success: false,
    successNoti: false,
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                requesting: true,
                data: null,
                err: null,
            };
        case GET_USER_SUCCESS:
            const payload = action.payload.data;

            return {
                ...state,
                requesting: false,
                data: payload,
                err: null,
                success: true,
            };
        case GET_USER_FAIL:
            return {
                ...state,
                success: false,
                requesting: false,
                data: null,
                err: action.payload.err,
            };

        case SEEN_MESSENGER:
            return {
                ...state,
                successNoti: false,
            };
        case SEEN_MESSENGER_SUCCESS:
            return {
                ...state,
                successNoti: true,
            };
        default:
            return state;
    }
};

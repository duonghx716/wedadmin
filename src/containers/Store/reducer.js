import { GET_STORE_REQUEST, GET_STORE_SUCCESS, GET_STORE_FAIL } from "./action";

const initialState = {
    requesting: false,
    data: null,
    err: null,
    success: false,
};

export const store = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORE_REQUEST:
            return {
                ...state,
                requesting: true,
                data: null,
                err: null,
            };
        case GET_STORE_SUCCESS:
            const payload = action.payload.data;

            return {
                ...state,
                requesting: false,
                data: payload,
                err: null,
                success: true,
            };
        case GET_STORE_FAIL:
            return {
                ...state,
                success: false,
                requesting: false,
                data: null,
                err: action.payload.err,
            };
        default:
            return state;
    }
};

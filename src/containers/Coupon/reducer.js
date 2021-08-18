import {
    GET_COUPON_REQUEST,
    GET_COUPON_SUCCESS,
    GET_COUPON_FAIL,
    ADD_STATUS,
    EDIT_STATUS,
} from "./action";

const initialState = {
    requesting: false,
    data: null,
    err: null,
    success: false,
    addStatus: null,
    editStatus: null,
};

export const Coupon = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUPON_REQUEST:
            return {
                ...state,
                requesting: true,
                data: null,
                err: null,
            };
        case GET_COUPON_SUCCESS:
            const payload = action.payload.data;

            return {
                ...state,
                requesting: false,
                data: payload,
                err: null,
                success: true,
            };
        case GET_COUPON_FAIL:
            return {
                ...state,
                success: false,
                requesting: false,
                data: null,
                err: action.payload.err,
            };
        case ADD_STATUS:
            return {
                ...state,
                addStatus: action.status,
            };
        case EDIT_STATUS:
            return {
                ...state,
                editStatus: action.status,
            };
        default:
            return state;
    }
};

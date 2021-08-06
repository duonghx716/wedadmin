import {
    GET_COUPON_REQUEST,
    GET_COUPON_SUCCESS,
    GET_COUPON_FAIL,
} from "./action";

const initialState = {
    requesting: false,
    data: null,
    err: null,
    success: false,
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
        default:
            return state;
    }
};

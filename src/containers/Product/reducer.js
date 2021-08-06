import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_ALL_TYPE_PRODUCT,
} from "./action";

const initialState = {
    requesting: false,
    data: null,
    types: null,
    err: null,
    success: false,
};

export const product = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                requesting: true,
                data: null,
                err: null,
            };
        case GET_PRODUCT_SUCCESS:
            const payload = action.payload.data;

            return {
                ...state,
                requesting: false,
                data: payload,
                err: null,
                success: true,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                success: false,
                requesting: false,
                data: null,
                err: action.payload.err,
            };
        case GET_ALL_TYPE_PRODUCT:
            return {
                ...state,
                types: action.types,
            };

        default:
            return state;
    }
};

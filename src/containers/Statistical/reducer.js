import {
    GET_STATISTICAL_FAIL,
    GET_STATISTICAL_ONE_SUCCESS,
    GET_STATISTICAL_REQUEST,
    GET_STATISTICAL_SUCCESS,
    GET_YEAR_SUCCESS,
} from "./action";

const initialState = {
    requesting: false,
    data: null,
    dataYear: null,
    err: null,
    success: false,
    dataOneStore: null,
};

export const Statistical = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATISTICAL_REQUEST:
            return {
                ...state,
                requesting: true,
                data: null,
                err: null,
            };
        case GET_STATISTICAL_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                requesting: false,
                data,
                err: null,
                success: true,
            };
        case GET_STATISTICAL_FAIL:
            return {
                ...state,
                success: false,
                requesting: false,
                data: null,
                err: action.payload.err,
            };
        case GET_YEAR_SUCCESS:
            return {
                ...state,
                dataYear: action.payload.data,
            };
        case GET_STATISTICAL_ONE_SUCCESS:
            return {
                ...state,
                dataOneStore: action.data,
            };

        default:
            return state;
    }
};

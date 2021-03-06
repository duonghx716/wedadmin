import {
    GET_STORE_FAIL,
    GET_STORE_REQUEST,
    GET_STORE_SUCCESS,
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

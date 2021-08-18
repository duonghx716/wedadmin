export const GET_STORE_REQUEST = "GET_STORE_REQUEST";
export const GET_STORE_SUCCESS = "GET_STORE_SUCCESS";
export const GET_STORE_FAIL = "GET_STORE_FAIL";
export const ADD_STORE = "ADD_STORE";
export const ADD_STATUS = "ADD_STATUS";
export const EDIT_STORE = "EDIT_STORE";
export const EDIT_STATUS = "EDIT_STATUS";

export const getStoreRequest = () => {
    return { type: GET_STORE_REQUEST };
};
export const getStoreSuccess = (data) => {
    return { type: GET_STORE_SUCCESS, payload: { data } };
};
export const getStoreFail = (err) => {
    return { type: GET_STORE_FAIL, payload: { err } };
};
export const addStore = (
    storeName,
    storeAddress,
    storePhone,
    storeLat,
    storeLong,
    storeImage,
    token
) => {
    return {
        type: ADD_STORE,
        storeName,
        storeAddress,
        storePhone,
        storeLat,
        storeLong,
        storeImage,
        token,
    };
};
export const addStatus = (status) => {
    return { type: ADD_STATUS, status };
};
export const editStatus = (status) => {
    return { type: EDIT_STATUS, status };
};
export const editStore = (
    storeName,
    storeAddress,
    storePhone,
    storeLat,
    storeLong,
    storeImage,
    token,
    storeID
) => {
    return {
        type: EDIT_STORE,
        storeName,
        storeAddress,
        storePhone,
        storeLat,
        storeLong,
        storeImage,
        token,
        storeID,
    };
};

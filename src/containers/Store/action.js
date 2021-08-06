export const GET_STORE_REQUEST = "GET_STORE_REQUEST";
export const GET_STORE_SUCCESS = "GET_STORE_SUCCESS";
export const GET_STORE_FAIL = "GET_STORE_FAIL";
export const ADD_STORE = "ADD_STORE";
export const EDIT_STORE = "EDIT_STORE";

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
// data.append('storeName', 'Cửa hàng Lê Quang Định');
// data.append('storeAddress', '123123');
// data.append('storePhone', '962280703');
// data.append('storeLat', '0');
// data.append('storeLong', '4');
// data.append('storeImage', '183');
// data.append('token', '4');

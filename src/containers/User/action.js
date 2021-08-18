export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUserRequest = () => {
    return { type: GET_USER_REQUEST };
};
export const getUserSuccess = (data) => {
    return { type: GET_USER_SUCCESS, payload: { data } };
};
export const getUserFail = (err) => {
    return { type: GET_USER_FAIL, payload: { err } };
};

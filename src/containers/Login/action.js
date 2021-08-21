export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const CHANGE_SUCCESS = "CHANGE_SUCCESS";

export const loginRequest = (username, password) => {
    return { type: LOGIN_REQUEST, username, password };
};
export const loginSuccess = (data) => {
    return { type: LOGIN_SUCCESS, data };
};
export const changeSuccess = () => {
    return { type: CHANGE_SUCCESS };
};

export const GET_STATISTICAL_REQUEST = "GET_STATISTICAL_REQUEST";
export const GET_STATISTICAL_SUCCESS = "GET_STATISTICAL_SUCCESS";
export const GET_STATISTICAL_FAIL = "GET_STATISTICAL_FAIL";
export const GET_YEAR_REQUEST = "GET_YEAR_REQUEST";
export const GET_YEAR_SUCCESS = "GET_YEAR_SUCCESS";
export const getStatisticalRequest = (year) => {
    return { type: GET_STATISTICAL_REQUEST, year };
};
export const getStatisticalSuccess = (data) => {
    return { type: GET_STATISTICAL_SUCCESS, payload: { data } };
};
export const getStatisticalFail = (err) => {
    return { type: GET_STATISTICAL_FAIL, payload: { err } };
};
export const getYearRequest = () => {
    return { type: GET_YEAR_REQUEST };
};
export const getYearSuccess = (data) => {
    return { type: GET_YEAR_SUCCESS, payload: { data } };
};

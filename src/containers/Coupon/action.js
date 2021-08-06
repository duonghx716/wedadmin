export const GET_COUPON_REQUEST = "GET_COUPON_REQUEST";
export const GET_COUPON_SUCCESS = "GET_COUPON_SUCCESS";
export const GET_COUPON_FAIL = "GET_COUPON_FAIL";
export const ADD_COUPON = "ADD_COUPON";
export const EDIT_COUPON = "EDIT_COUPON";

export const getCouponRequest = () => {
    return { type: GET_COUPON_REQUEST };
};
export const getCouponSuccess = (data) => {
    return { type: GET_COUPON_SUCCESS, payload: { data } };
};
export const getCouponFail = (err) => {
    return { type: GET_COUPON_FAIL, payload: { err } };
};
export const addCoupon = (
    CouponImage,
    DateStart,
    DateEnd,
    CouponNote,
    CouponCondition,
    CouponPrice,
    Status
) => {
    return {
        type: ADD_COUPON,
        CouponImage,
        DateStart,
        DateEnd,
        CouponNote,
        CouponCondition,
        CouponPrice,
        Status,
    };
};
export const editCoupon = (
    CouponImage,
    DateStart,
    DateEnd,
    CouponNote,
    CouponCondition,
    CouponPrice,
    Status
) => {
    return {
        type: EDIT_COUPON,
        CouponImage,
        DateStart,
        DateEnd,
        CouponNote,
        CouponCondition,
        CouponPrice,
        Status,
    };
};

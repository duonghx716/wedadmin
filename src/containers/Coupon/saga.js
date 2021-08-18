import { takeLatest, call, put } from "redux-saga/effects";
import API from "../../network/apis";
import FormData from "form-data";
import {
    GET_COUPON_REQUEST,
    getCouponSuccess,
    getCouponFail,
    ADD_COUPON,
    EDIT_COUPON,
    editStatus,
    addStatus,
} from "./action";
function loadCoupon() {
    return API("/Coupon_getALl1.php", "get");
}
function* loadCouponFlow() {
    try {
        const response = yield call(loadCoupon);
        console.log({ response });
        if (response) {
            yield put(getCouponSuccess(response.data.Coupon));
        } else {
            yield put(getCouponFail(response));
        }
    } catch (error) {
        console.log("loadCouponFlow catch", error);
    }
}
function loadAddCoupon(body) {
    const {
        CouponImage,
        DateStart,
        DateEnd,
        CouponNote,
        CouponCondition,
        CouponPrice,
        Status,
    } = body;
    let data = new FormData();
    data.append("CouponImage", CouponImage);
    data.append("DateStart", DateStart);
    data.append("DateEnd", DateEnd);
    data.append("CouponNote", CouponNote);
    data.append("CouponCondition", CouponCondition);
    data.append("CouponPrice", CouponPrice);
    data.append("Status", Status);
    return API("/Coupon_insert.php", "POST", data);
}
function* addCoupon(data) {
    try {
        const response = yield call(loadAddCoupon, data);
        if (response.data) {
            yield put(addStatus(1));
            yield call(loadCouponFlow);
        } else {
            yield put(addStatus(0));
        }
    } catch (error) {
        console.log("loadCouponFlow catch", error);
    }
}
function loadEditCoupon(body) {
    const {
        CouponImage,
        DateStart,
        DateEnd,
        CouponNote,
        CouponCondition,
        CouponPrice,
        Status,
        CouponID,
    } = body;
    let data = new FormData();
    data.append("CouponImage", CouponImage);
    data.append("DateStart", DateStart);
    data.append("DateEnd", DateEnd);
    data.append("CouponNote", CouponNote);
    data.append("CouponCondition", CouponCondition);
    data.append("CouponPrice", CouponPrice);
    data.append("Status", Status);
    data.append("CouponID", CouponID);
    return API("/Coupon_update.php", "POST", data);
}
function* editCoupon(data) {
    try {
        const response = yield call(loadEditCoupon, data);
        console.log("editCoupon", response);
        if (response.data) {
            yield call(loadCouponFlow);
            yield put(editStatus(1));
        } else {
            yield put(editStatus(0));
        }
    } catch (error) {
        console.log("loadCouponFlow catch", error);
    }
}

export default function* loadCouponWatcher() {
    console.log("{ response }");
    yield takeLatest(GET_COUPON_REQUEST, loadCouponFlow);
    yield takeLatest(ADD_COUPON, addCoupon);
    yield takeLatest(EDIT_COUPON, editCoupon);
}

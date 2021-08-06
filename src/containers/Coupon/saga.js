import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import API from "../../network/apis";
import {
    GET_COUPON_REQUEST,
    getCouponSuccess,
    getCouponFail,
    ADD_COUPON,
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
    console.log({ body });
    // return API("/Coupon_getALl1.php", "get");
}
function* addCoupon(data) {
    try {
        const response = yield call(loadAddCoupon, data);
        console.log({ response });
        if (response) {
            // yield put(getCouponSuccess(response.data.Coupon));
        } else {
            // yield put(getCouponFail(response));
        }
    } catch (error) {
        console.log("loadCouponFlow catch", error);
    }
}

export default function* loadCouponWatcher() {
    console.log("{ response }");
    yield takeLatest(GET_COUPON_REQUEST, loadCouponFlow);
    yield takeLatest(ADD_COUPON, addCoupon);
}

import loadStore from "../../containers/Store/saga";
import loadShipper from "../../containers/Shipper/saga";
import loadProduct from "../../containers/Product/saga";
import loadCoupon from "../../containers/Coupon/saga";
import loadUser from "../../containers/User/saga";
import loadStatistical from "../../containers/Statistical/saga";
import { all } from "redux-saga/effects";

export function* watchSagas() {
    yield all([
        loadStore(),
        loadShipper(),
        loadProduct(),
        loadCoupon(),
        loadUser(),
        loadStatistical(),
    ]);
}

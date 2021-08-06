import loadStore from "../../containers/Store/saga";
import loadShipper from "../../containers/Shipper/saga";
import loadProduct from "../../containers/Product/saga";
import loadCoupon from "../../containers/Coupon/saga";
import { all } from "redux-saga/effects";

export function* watchSagas() {
    yield all([loadStore(), loadShipper(), loadProduct(), loadCoupon()]);
}

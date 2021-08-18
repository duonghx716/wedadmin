import { combineReducers } from "redux";

import { store } from "../../containers/Store/reducer";
import { shipper } from "../../containers/Shipper/reducer";
import { product } from "../../containers/Product/reducer";
import { Coupon } from "../../containers/Coupon/reducer";
import { user } from "../../containers/User/reducer";
import { Statistical } from "../../containers/Statistical/reducer";

export default combineReducers({
    store,
    shipper,
    product,
    Coupon,
    user,
    Statistical,
});

import { takeLatest, call, put } from "redux-saga/effects";
import API from "../../network/apis";
import {
    GET_SHIPPER_REQUEST,
    getShipperSuccess,
    getShipperFail,
    ADD_SHIPPER,
    EDIT_SHIPPER,
} from "./action";
import axios from "axios";
import FormData from "form-data";
function loadShipper() {
    return API("/Admin_getAllShipper.php", "get");
}
function* loadShipperFlow() {
    try {
        const response = yield call(loadShipper);
        if (response) {
            yield put(getShipperSuccess(response.data.Shipper));
        } else {
            yield put(getShipperFail(response));
        }
    } catch (error) {
        console.log("loadShipperFlow catch", error);
    }
}
const loadAddShipper = (body) => {
    const { shipName, shipImage, shipPhone, shipNumberCar, storeID } = body;
    let data = new FormData();
    data.append("shipName", shipName);
    data.append("shipImage", shipImage);
    data.append("shipPhone", shipPhone);
    data.append("shipNumberCar", shipNumberCar);
    data.append("storeID", storeID);

    return API("/Admin_addShipper.php", "POST", data);
};
function* addShipper(data) {
    try {
        const response = yield call(loadAddShipper, data);
        console.log(JSON.stringify(response));
        if (response.data === 1) {
            // yield put(loadShipperFlow());  /Shipper_Update.php
            console.log("thêm thành công");
        } else {
            console.log("thêm thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
const loadEditShipper = (body) => {
    const { ShipName, ShipImage, ShipPhone, ShipNumberCar, StoreID } = body;
    let data = new FormData();
    data.append("ShipName", ShipName);
    data.append("ShipImage", ShipImage);
    data.append("ShipPhone", ShipPhone);
    data.append("ShipNumberCar", ShipNumberCar);
    data.append("StoreID", StoreID);

    return API("/Shipper_Update.php", "POST", data);
};
function* editShipper(data) {
    try {
        const response = yield call(loadEditShipper, data);
        console.log(JSON.stringify(response));
        if (response.data === 1) {
            // yield put(loadShipperFlow());
            console.log(" sửa thành công");
        } else {
            console.log(" sửa thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
export default function* loadShipperWatcher() {
    yield takeLatest(GET_SHIPPER_REQUEST, loadShipperFlow);
    yield takeLatest(ADD_SHIPPER, addShipper);
    yield takeLatest(EDIT_SHIPPER, editShipper);
}

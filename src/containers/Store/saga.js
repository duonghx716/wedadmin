import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import API from "../../network/apis";
import {
    GET_STORE_REQUEST,
    getStoreSuccess,
    getStoreFail,
    ADD_STORE,
    EDIT_STORE,
} from "./action";
import FormData from "form-data";

function loadStore() {
    return API("/Store_getAll.php", "get");
}
function* loadStoreFlow() {
    try {
        const response = yield call(loadStore);
        if (response) {
            yield put(getStoreSuccess(response.data.stores));
            //     // console.log('load Categories success');
            //     // console.log('data Categories: ', response.data.PZH_MENU.Store);
        } else {
            yield put(getStoreFail(response));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
function addStore(body) {
    console.log("=========", body);
    const {
        storeName,
        storeAddress,
        storePhone,
        storeLat,
        storeLong,
        storeImage,
        token,
    } = body;
    let data = new FormData();

    data.append("storeName", storeName);
    data.append("storeAddress", storeAddress);
    data.append("storePhone", storePhone);
    data.append("storeLat", storeLat);
    data.append("storeLong", storeLong);
    data.append("storeImage", storeImage);
    data.append("token", token);

    return API("/Store_insert.php", "POST", data);
}
function* addStoreFlow(data) {
    try {
        const response = yield call(addStore, data);
        if (response) {
            // yield put(getStoreSuccess(response.data.stores));
            console.log("load addStoreFlow  success");
            //     // console.log('data Categories: ', response.data.PZH_MENU.Store);
        } else {
            // yield put(getStoreFail(response));
            console.log("load addStoreFlow  error");
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}

function editStore(body) {
    console.log("=========", body);
    const {
        storeName,
        storeAddress,
        storePhone,
        storeLat,
        storeLong,
        storeImage,
        token,
        storeID,
    } = body;
    let data = new FormData();

    data.append("storeID", storeID);
    data.append("storeName", storeName);
    data.append("storeAddress", storeAddress);
    data.append("storePhone", storePhone);
    data.append("storeLat", storeLat);
    data.append("storeLong", storeLong);
    data.append("storeImage", storeImage);
    data.append("token", token);

    return API("/Store_update.php", "POST", data);
}
function* editStoreFlow(data) {
    try {
        const response = yield call(editStore, data);
        console.log("load editStoreFlow success", response);

        if (response) {
            // yield put(getStoreSuccess(response.data.stores));
            console.log("load editStoreFlow success");
            //     // console.log('data Categories: ', response.data.PZH_MENU.Store);
        } else {
            // yield put(getStoreFail(response));
            console.log("load editStoreFlow  error");
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
export default function* loadStoreWatcher() {
    yield takeLatest(GET_STORE_REQUEST, loadStoreFlow);
    yield takeLatest(ADD_STORE, addStoreFlow);
    yield takeLatest(EDIT_STORE, editStoreFlow);
}

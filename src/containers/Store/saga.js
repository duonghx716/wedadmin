import FormData from "form-data";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis";
import {
    addStatus,
    ADD_STORE,
    editStatus,
    EDIT_STORE,
    getStoreFail,
    getStoreSuccess,
    GET_STORE_REQUEST,
} from "./action";

function loadStore() {
    return API("/Store_getAll.php", "get");
}
function* loadStoreFlow() {
    try {
        const response = yield call(loadStore);
        if (response) {
            yield put(getStoreSuccess(response.data.stores));
        } else {
            yield put(getStoreFail(response));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
function addStore(body) {
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
        console.log({ data: response.data });
        if (response.data === "\n\t\nInsert Success!") {
            yield call(loadStoreFlow);
            yield put(addStatus(1));
        } else if (response.data === "\n\t\nStore is exits!") {
            yield put(addStatus(-1));
        } else {
            yield put(addStatus(0));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
        yield put(addStatus(0));
    }
}

function editStore(body) {
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

        if (response.data) {
            yield call(loadStoreFlow);
            yield put(editStatus(1));
        } else {
            yield put(editStatus(0));
        }
    } catch (error) {
        yield put(editStatus(0));
    }
}
export default function* loadStoreWatcher() {
    yield takeLatest(GET_STORE_REQUEST, loadStoreFlow);
    yield takeLatest(ADD_STORE, addStoreFlow);
    yield takeLatest(EDIT_STORE, editStoreFlow);
}

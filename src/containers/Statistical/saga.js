import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis";
import FormData from "form-data";
import {
    getStatisticalFail,
    getStatisticalSuccess,
    getYearSuccess,
    GET_STATISTICAL_REQUEST,
    GET_YEAR_REQUEST,
    GET_STATISTICAL_ONE_REQUEST,
    GET_STATISTICAL_ONE_SUCCESS,
    getStatisticalOneSuccess,
} from "./action";

function loadStatistical(body) {
    let data = new FormData();
    data.append("year", body.year);
    return API("/Admin_ThongKeAllStore.php", "POST", data);
}
function* loadStatisticalFlow(body) {
    try {
        const response = yield call(loadStatistical, body);
        if (response) {
            yield put(getStatisticalSuccess(response.data));
        } else {
            yield put(getStatisticalFail(response));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
function loadYear() {
    return API("/Admin_getYear.php", "get");
}
function* loadYearFlow() {
    try {
        const response = yield call(loadYear);
        if (response) {
            yield put(getYearSuccess(response.data));
        } else {
            console.log("loadYearFlow catch");
        }
    } catch (error) {
        console.log("loadYearFlow catch", error);
    }
}

function loadStatisticalOne(body) {
    const { year, storeID } = body;
    let data = new FormData();
    data.append("year", year);
    data.append("storeID", storeID);
    return API("/Admin_ThongKe1Store.php", "POST", data);
}
function* loadStatisticalOneFlow(body) {
    try {
        const response = yield call(loadStatisticalOne, body);
        if (response.data) {
            yield put(getStatisticalOneSuccess(response.data));
        } else {
            console.log("loadStatisticalOneFlow error");
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
export default function* loadStatisticalWatcher() {
    yield takeLatest(GET_STATISTICAL_REQUEST, loadStatisticalFlow);
    yield takeLatest(GET_YEAR_REQUEST, loadYearFlow);
    yield takeLatest(GET_STATISTICAL_ONE_REQUEST, loadStatisticalOneFlow);
}

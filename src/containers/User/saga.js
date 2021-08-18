import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis";
import { getUserFail, getUserSuccess, GET_USER_REQUEST } from "./action";

function loadUser() {
    return API("/User_getAll.php", "get");
}
function* loadUserFlow() {
    try {
        const response = yield call(loadUser);
        if (response) {
            yield put(getUserSuccess(response.data.users));
        } else {
            yield put(getUserFail(response));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}

export default function* loadUserWatcher() {
    yield takeLatest(GET_USER_REQUEST, loadUserFlow);
}

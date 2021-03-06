import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis";
import {
    getUserFail,
    getUserSuccess,
    GET_USER_REQUEST,
    SEEN_MESSENGER,
    setMessengerSuccess,
} from "./action";
import FormData from "form-data";

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
function loadMessenger(body) {
    const { title, message, list } = body;
    let data = new FormData();
    data.append("title", title);
    data.append("list", `${list}`);
    data.append("message", message);
    return API("/Notification_sendMultiple.php", "POST", data);
}
function* loadSeenMessengers(body) {
    try {
        const response = yield call(loadMessenger, body);

        if (response.data.error === false) {
            yield put(setMessengerSuccess(true));
        } else {
            yield put(setMessengerSuccess(false));
        }
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
export default function* loadUserWatcher() {
    yield takeLatest(GET_USER_REQUEST, loadUserFlow);
    yield takeLatest(SEEN_MESSENGER, loadSeenMessengers);
}

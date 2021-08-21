import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis";
import { loginSuccess, LOGIN_REQUEST } from "./action";
import FormData from "form-data";

function LoaderLogin(body) {
    const { username, password } = body;
    let data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("token", null);
    return API("/Admin_login.php", "POST", data);
}
function* login(body) {
    try {
        const response = yield call(LoaderLogin, body);
        yield put(loginSuccess(response.data));
    } catch (error) {
        console.log("loadStoreFlow catch", error);
    }
}
export default function* loadLoginWatcher() {
    yield takeLatest(LOGIN_REQUEST, login);
}

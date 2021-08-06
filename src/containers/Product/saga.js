import { takeLatest, call, put } from "redux-saga/effects";
import API from "../../network/apis";
import {
    GET_PRODUCT_REQUEST,
    getProductSuccess,
    getProductFail,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    GET_ALL_TYPE_PRODUCT,
    getType,
    GET_ALL_TYPE_PRODUCT_REQUEST,
    ADD_TYPE_PRODUCT,
    EDIT_TYPE_PRODUCT,
} from "./action";
import FormData from "form-data";
function getAllProduct() {
    return API("/Product_getAll.php", "get");
}
function* loadProductFlow() {
    try {
        const response = yield call(getAllProduct);
        console.log({ response });
        if (response) {
            yield put(getProductSuccess(response.data.products));
        } else {
            yield put(getProductFail(response));
        }
    } catch (error) {
        console.log("loadProductFlow catch", error);
    }
}
function getTypePro() {
    return API("/TypeProduct_getAll.php", "get");
}
function* loadType() {
    try {
        const response = yield call(getTypePro);
        console.log({ response });
        if (response) {
            yield put(getType(response.data.TypeProduct));
        } else {
            console.log("loadType  lỗi ");
        }
    } catch (error) {
        console.log("loadProductFlow catch", error);
    }
}
const loadAddProduct = (body) => {
    const { ProductName, ProductPrice, ProductImage, ProductNote, TypeID } =
        body;
    let data = new FormData();
    data.append("ProductName", ProductName);
    data.append("ProductPrice", ProductPrice);
    data.append("ProductImage", ProductImage);
    data.append("ProductNote", ProductNote);
    data.append("TypeID", TypeID);
    return API("/Product_insert.php", "POST", data);
};
function* addProduct(data) {
    try {
        const response = yield call(loadAddProduct, data);
        if (response.data) {
            console.log("thêm thành công");
        } else {
            console.log("thêm thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
const loadEditProduct = (body) => {
    const {
        ProductID,
        ProductName,
        ProductPrice,
        ProductImage,
        ProductNote,
        TypeID,
    } = body;
    let data = new FormData();
    data.append("ProductID", ProductID);
    data.append("ProductName", ProductName);
    data.append("ProductPrice", ProductPrice);
    data.append("ProductImage", ProductImage);
    data.append("ProductNote", ProductNote);
    data.append("TypeID", TypeID);

    return API("/Product_update.php", "POST", data);
};
function* editProduct(data) {
    try {
        const response = yield call(loadEditProduct, data);
        console.log(JSON.stringify(response));
        if (response.data) {
            // yield put(loadShipperFlow());
            console.log(" sửa thành công");
        } else {
            console.log(" sửa thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
const loadAddTypeProduct = (body) => {
    const { typeName, typeNote } = body;

    let data = new FormData();
    data.append("typeName", typeName);
    data.append("typeNote", typeNote);

    return API("/TypeProduct_insert.php", "POST", data);
};
function* AddType(data) {
    try {
        const response = yield call(loadAddTypeProduct, data);
        console.log(JSON.stringify(response));
        if (response.data) {
            console.log(" Thêm thành công");
        } else {
            console.log(" Thêm thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
const loadEditTypeProduct = (body) => {
    console.log("=========", body);
    const { typeName, typeNote, typeID } = body;
    let data = new FormData();
    data.append("typeID", typeID);
    data.append("typeName", typeName);
    data.append("typeNote", typeNote);

    return API("/TypeProduct_update.php", "POST", data);
};
function* EditType(data) {
    try {
        const response = yield call(loadEditTypeProduct, data);
        console.log(JSON.stringify(response));
        if (response.data) {
            console.log(" sửa thành công");
        } else {
            console.log(" sửa thất bại");
        }
    } catch (error) {
        console.log("addShipper catch", error);
    }
}
export default function* loadProductWatcher() {
    yield takeLatest(GET_PRODUCT_REQUEST, loadProductFlow);
    yield takeLatest(GET_ALL_TYPE_PRODUCT_REQUEST, loadType);
    yield takeLatest(ADD_PRODUCT, addProduct);
    yield takeLatest(EDIT_PRODUCT, editProduct);
    yield takeLatest(ADD_TYPE_PRODUCT, AddType);
    yield takeLatest(EDIT_TYPE_PRODUCT, EditType);
}
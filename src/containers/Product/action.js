export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const GET_ALL_TYPE_PRODUCT = "GET_ALL_TYPE_PRODUCT";
export const GET_ALL_TYPE_PRODUCT_REQUEST = "GET_ALL_TYPE_PRODUCT_REQUEST";
export const ADD_TYPE_PRODUCT = "ADD_TYPE_PRODUCT";
export const EDIT_TYPE_PRODUCT = "EDIT_TYPE_PRODUCT";

export const getProductRequest = () => {
    return { type: GET_PRODUCT_REQUEST };
};
export const getType = (types) => {
    return { type: GET_ALL_TYPE_PRODUCT, types };
};
export const getTypeRequest = () => {
    return { type: GET_ALL_TYPE_PRODUCT_REQUEST };
};
export const getProductSuccess = (data) => {
    return { type: GET_PRODUCT_SUCCESS, payload: { data } };
};
export const getProductFail = (err) => {
    return { type: GET_PRODUCT_FAIL, payload: { err } };
};
export const addProduct = (
    ProductName,
    ProductPrice,
    ProductImage,
    ProductNote,
    TypeID
) => {
    return {
        type: ADD_PRODUCT,
        ProductName,
        ProductPrice,
        ProductImage,
        ProductNote,
        TypeID,
    };
};
export const editProduct = (
    ProductID,
    ProductName,
    ProductPrice,
    ProductImage,
    ProductNote,
    TypeID
) => {
    return {
        type: EDIT_PRODUCT,
        ProductID,
        ProductName,
        ProductPrice,
        ProductImage,
        ProductNote,
        TypeID,
    };
};
export const addType = (typeName, typeNote) => {
    return {
        type: ADD_TYPE_PRODUCT,
        typeName,
        typeNote,
    };
};

export const EditType = (typeName, typeNote, typeID) => {
    return {
        type: EDIT_TYPE_PRODUCT,
        typeID,
        typeName,
        typeNote,
    };
};

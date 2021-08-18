export const GET_SHIPPER_REQUEST = "GET_SHIPPER_REQUEST";
export const GET_SHIPPER_SUCCESS = "GET_SHIPPER_SUCCESS";
export const GET_SHIPPER_FAIL = "GET_SHIPPER_FAIL";
export const ADD_SHIPPER = "ADD_SHIPPER";
export const ADD_STATUS = "ADD_STATUS";
export const EDIT_SHIPPER = "EDIT_SHIPPER";
export const EDIT_STATUS = "EDIT_STATUS";

export const getShipperRequest = () => {
    return { type: GET_SHIPPER_REQUEST };
};
export const getShipperSuccess = (data) => {
    return { type: GET_SHIPPER_SUCCESS, payload: { data } };
};
export const getShipperFail = (err) => {
    return { type: GET_SHIPPER_FAIL, payload: { err } };
};
export const addStatus = (status) => {
    return { type: ADD_STATUS, status };
};
export const editStatus = (status) => {
    return { type: EDIT_STATUS, status };
};
export const addShipper = (
    shipName,
    shipImage,
    shipPhone,
    shipNumberCar,
    storeID
) => {
    return {
        type: ADD_SHIPPER,
        shipName,
        shipImage,
        shipPhone,
        shipNumberCar,
        storeID,
    };
};
export const editShipper = (
    ShipName,
    ShipImage,
    ShipPhone,
    ShipNumberCar,
    StoreID
) => {
    return {
        type: EDIT_SHIPPER,
        ShipName,
        ShipImage,
        ShipPhone,
        ShipNumberCar,
        StoreID,
    };
};

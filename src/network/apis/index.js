import axios from "axios";

///store_getAll.php
//https://thetimecoffee.000webhostapp.com/FoodDelivery/api/Store_getAll.php
const API_URL = "http://192.168.1.102/FOODDELIVERY/api";
const config = (endPoint, method, data) => {
    return {
        method,
        url: `${API_URL}${endPoint}`,
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data,
    };
};

const CallAPI = (endPoint, method, data = null) => {
    return axios(config(endPoint, method, data)).then(function (response) {
        return response;
    });
};
export default CallAPI;

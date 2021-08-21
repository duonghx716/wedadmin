import axios from "axios";

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

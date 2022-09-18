import * as axios from 'axios';
const baseUrl = "http://localhost:7000";

const getData = async (path: string) => {
    let response = await axios.default.get(baseUrl + path);
    return response;
}

const postData = async (path: string, payload: any) => {
    let response = await axios.default.post(baseUrl + path, payload);
    return response;
}
const putData = async (path: string, payload: any) => {
    let response = await axios.default.put(baseUrl + path, payload);
    return response;
}
const deletetData = async (path: string) => {
    let response = await axios.default.delete(baseUrl + path);
    return response;
}

const patchtData = async (path: string, payload: any) => {
    let response = await axios.default.patch(baseUrl + path, payload);
    return response;
}

export { getData, deletetData, postData, patchtData, putData }
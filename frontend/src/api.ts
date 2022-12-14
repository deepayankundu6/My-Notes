import * as axios from 'axios';

const getData = async (path: string) => {
    let response = await axios.default.get(path);
    return response;
}

const postData = async (path: string, payload: any) => {
    let response = await axios.default.post(path, payload);
    return response;
}

const putData = async (path: string, payload: any) => {
    let response = await axios.default.put(path, payload);
    return response;
}

const deleteData = async (path: string) => {
    let response = await axios.default.delete(path);
    return response;
}

const patchData = async (path: string, payload: any) => {
    let response = await axios.default.patch(path, payload);
    return response;
}

export { getData, deleteData, postData, patchData, putData }
import axios from 'axios'
import { useDispatch } from 'react-redux'

import config from '../configurations'

let token = localStorage.getItem('token')
let tokenHeader = token ? { Authorization: `Bearer ${token}` } : {}
const instance = axios.create({
    baseURL: config.backendURL,
    responseType: 'json',
    headers: {
        ...tokenHeader,
        'Content-Type': 'application/json',
    },
})
async function post(path = '', data = {}) {
    const response = await instance.post(path, JSON.stringify(data))
    if (response.status === 200) return response.data
    else throw new Error(response.data)
}
async function put(path = '', data = {}) {
    const response = await instance.put(path, JSON.stringify(data))
    if (response.status === 200) return response.data
    else throw new Error(response.data)
}
async function get(path = '', data = {}) {
    const response = await instance.get(path, {
        params: data,
    })
    if (response.status === 200) {
        return response.data
    } else
        return Promise.reject({
            code: response.status,
            response: response.data,
        })
}
async function postFormData(path = '', formData = null, onUploadProgress) {
    let url = config.backendURL + path
    const response = await instance.post(url, formData, {
        onUploadProgress,
    })
    return response.data
}
export default { post, get, postFormData, put }

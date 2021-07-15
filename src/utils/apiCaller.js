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
    try {
        const response = await instance.post(path, JSON.stringify(data))
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error.response)
            return Promise.reject({
                code: error.response.status,
                response: error.response.data,
            })
    }
}
async function put(path = '', data = {}) {
    try {
        const response = await instance.put(path, JSON.stringify(data))
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error.response)
            return Promise.reject({
                code: error.response.status,
                response: error.response.data,
            })
    }
}
async function get(path = '', data = {}) {
    try {
        const response = await instance.get(path, {
            params: data,
        })
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error.response)
            return Promise.reject({
                code: error.response.status,
                response: error.response.data,
            })
    }
}
async function del(path = '', data = {}) {
    try {
        const response = await instance.delete(path, {
            params: data,
        })
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error.response)
            return Promise.reject({
                code: error.response.status,
                response: error.response.data,
            })
    }
}
async function postFormData(path = '', formData = null, onUploadProgress) {
    let url = config.backendURL + path
    try {
        const response = await instance.post(url, formData, {
            onUploadProgress,
        })
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error.response)
            return Promise.reject({
                code: error.response.status,
                response: error.response.data,
            })
    }
}
export default { post, get, postFormData, put, del }

// import { Error, Success } from '../../helpers/notify'
import apiCaller from '../../utils/apiCaller'

export const updateProfile = async (name, job, quote) => {
    try {
        const data = { name, job, quote }
        const response = await apiCaller.put('/user', data)
        return response?.data
    } catch (ex) {
        console.log(ex)
    }
    return -1
}

export const getPostsByID = async (userID, page, limit) => {
    try {
        const data = { page, limit }
        const response = await apiCaller.get('/post/user/' + userID, data)
        return response?.data
    } catch (ex) {
        console.log(ex)
    }
    return null
}
export const followUser = async (userID, isFollow) => {
    let response
    if (isFollow) response = await apiCaller.post(`/user/${userID}/follow`)
    else response = await apiCaller.deleteJson(`/user/${userID}/follow`)
    console.log(response)
    return response?.data
}

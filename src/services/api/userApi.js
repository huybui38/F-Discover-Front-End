import ApiCaller from '../../utils/apiCaller'

const getSuggestUser = async (limit) => {
    return await ApiCaller.get(`/user/suggest?limit=${limit}`)
}
const checkFollowUserById = async (postId) => {
    return await ApiCaller.get(`/user/${postId}/follow`)
}

//POST
const followUserById = async (postId) => {
    return await ApiCaller.post(`/user/${postId}/follow`)
}

//DELETE
const unFollowUserById = async (postId) => {
    return await ApiCaller.delete(`/user/${postId}/follow`)
}
export { getSuggestUser, checkFollowUserById, followUserById, unFollowUserById }

import ApiCaller from '../../utils/apiCaller'

// GET
const getSuggestPosts = async (page, limit, time) => {
    return await ApiCaller.get(`/post/suggest?page=${page}&limit=${limit}&time=${time}`)
}
const checkLikePostById = async (id) => {
    return await ApiCaller.get(`/post/${id}/like`)
}
const getAllComment = async (postId, page, limit) => {
    return await ApiCaller.get(`/post/${postId}/comment/?page=${page}&limit=${limit}`)
}

//POST
const createComment = async (postId, content) => {
    return await ApiCaller.post(`/post/${postId}/comment`, content)
}
const likePostById = async (id) => {
    return await ApiCaller.post(`/post/${id}/like`)
}

//DELETE
const unLikePostById = async (id) => {
    return await ApiCaller.post(`/post/${id}/like`)
}
const deleteCommentById = async (postId, commentId) => {
    return await ApiCaller.delete(`/post/${postId}/comment/${commentId}`)
}
const deletePostById = async (postId) => {
    return await ApiCaller.delete(`/post/${postId}`)
}
export {
    getSuggestPosts,
    checkLikePostById,
    likePostById,
    createComment,
    getAllComment,
    deleteCommentById,
    deletePostById,
    unLikePostById,
}

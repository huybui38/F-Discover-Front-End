import apiCaller from '../../utils/apiCaller'

export const uploadVideo = async (formData, onUploadProgress) => {
    let response
    try {
        response = await apiCaller.postFormData('/post/0/upload-video', formData, onUploadProgress)
    } catch (ex) {
        response = ex.response
    }
    return response
}

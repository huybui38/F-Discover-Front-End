import apiCaller from '../../utils/apiCaller'

export const uploadVideo = async (formData, onUploadProgress) => {
    try {
        return await apiCaller.postFormData('/post/0/upload-video', formData, onUploadProgress)
    } catch (ex) {
        console.log(ex)
    }
}

import ApiCaller from '../../utils/apiCaller'

const getToken = async (token) => {
    return await ApiCaller.post('/authentication', { token })
}
export default { getToken }

import ApiCaller from '../../utils/apiCaller'

const getToken = async (token, type) => {
    return await ApiCaller.post('/authentication', { token, type })
}
export default { getToken }

import ApiCaller from '../../utils/apiCaller'

const getSuggestUser = async (limit) => {
    return await ApiCaller.get(`/user/suggest?limit=${limit}`)
}
export { getSuggestUser }

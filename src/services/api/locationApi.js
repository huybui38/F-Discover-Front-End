import ApiCaller from '../../utils/apiCaller'

const getLocationList = async () => {
    return await ApiCaller.get(`/location`)
}
export default { getLocationList }

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

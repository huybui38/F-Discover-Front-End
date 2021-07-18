import ApiCaller from '../../utils/apiCaller'

// GET
const search = async (data) => {
    return await ApiCaller.get(`/search?search=${data}`)
}

export { search }

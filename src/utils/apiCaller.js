import config from '../configurations'

async function post(path = '', data = {}) {
    let url = config.backendURL + path
    let token = localStorage.getItem('token')
    let tokenHeader = token ? { Authorization: `Bearer ${token}` } : {}
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            ...tokenHeader,
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(data),
    })
    let jsonData = await response.json()
    if (response.ok) return jsonData
    else throw new Error(jsonData)
}
async function get(path = '', data = {}) {
    let token = localStorage.getItem('token')
    let tokenHeader = token ? { Authorization: `Bearer ${token}` } : {}
    // Default options are marked with *
    let url = config.backendURL + path + '?' + new URLSearchParams(data)
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            ...tokenHeader,
        },
    })
    return response.json() // parses JSON response into native JavaScript objects
}
async function postFormData(path = '', formData = null) {
    let token = localStorage.getItem('token')
    let tokenHeader = token ? { Authorization: `Bearer ${token}` } : {}
    let url = config.backendURL + path
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            ...tokenHeader,
        },
        body: formData,
    })
    return response.json()
}
export default { post, get, postFormData }

const getNotifyMessage = (code) => {
    let result = ''
    switch (code) {
        case 401:
            result = 'Token hết hạn!'
            break
        default:
            break
    }
    return result
}
export { getNotifyMessage }

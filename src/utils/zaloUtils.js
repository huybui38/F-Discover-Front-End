import config from '../configurations/index'

export const generateZaloURL = () => {
    return `https://oauth.zaloapp.com/v3/permission?app_id=${config.zaloAppID}&redirect_uri=${config.baseURL}${config.zaloCallBack}&state=none`
}

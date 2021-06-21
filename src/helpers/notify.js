import { toast } from 'react-toastify'

export const Success = (message) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}
export const Error = (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}
export const Info = (message) => {
    toast.info(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

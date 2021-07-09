import { useState } from 'react'

const useModal = (initialState = false) => {
    const [isShowing, setIsShowing] = useState(initialState)

    function toggle() {
        setIsShowing(!isShowing)
    }

    return [isShowing, toggle]
}
export default useModal

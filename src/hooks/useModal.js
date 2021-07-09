import { useState } from 'react'

const useModal = (initialState = false) => {
    const [isShowing, setIsShowing] = useState(initialState)

    function toggle() {
        setIsShowing(!isShowing)
    }

    function openModal() {
        setIsShowing(true)
    }

    function closeModal() {
        setIsShowing(false)
    }

    return {
        isShowing,
        toggle,
        openModal,
        closeModal,
    }
}
export default useModal

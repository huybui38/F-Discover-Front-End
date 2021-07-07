import { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)

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

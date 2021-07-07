import React from 'react'

import PropTypes from 'prop-types'

import { TextFieldInput } from '../../../components/Input'
import Modal from '../../../components/Modal/Modal'

function UpdateProfileModal(props) {
    const { toggle, isShowing } = props
    const closeModalHandler = () => {
        toggle()
    }
    return (
        <div>
            <Modal isShowing={isShowing} hide={closeModalHandler} title="Update profile">
                {/* <TextFieldInput></TextFieldInput> */}
            </Modal>
        </div>
    )
}

UpdateProfileModal.propTypes = {
    toggle: PropTypes.func,
    isShowing: PropTypes.bool,
}

export default UpdateProfileModal

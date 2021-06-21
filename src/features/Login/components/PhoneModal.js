/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { PuffLoader } from '../../../components/Loading/Loader'
import Modal from '../../../components/Modal/Modal'

import { Error, Success } from '../../../helpers/notify'
import useModal from '../../../hooks/useModal'
import firebase, { FirebaseAuth } from '../../../services/authentication/'

let confirmation
function PhoneModal(props) {
    const { isShowing, toggle, appVerify, onSuccess } = props
    const [isLoading, setIsLoading] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [OTP, setOTP] = useState('')
    const [isShowOTP, setShowOTP] = useState(false)
    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleChangeOTP = (e) => {
        setOTP(e.target.value)
    }
    const handleOTP = () => {
        confirmation
            .confirm(OTP)
            .then((result) => {
                // console.log(FirebaseAuth.currentUser)
                // console.log(await result.user.getIdToken(true))
                Success('Xac thuc so dien thoai thanh cong')
                onSuccess(result)
                setShowOTP(false)
            })
            .catch((e) => {
                console.log(e)
                Error('Mã xác thực không chính xác')
            })
    }
    const onSignInSubmit = () => {
        setIsLoading(true)
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerify)
            .then((confirmationResult) => {
                setIsLoading(false)
                Success('Đã gửi mã xác nhận!')
                setShowOTP(true)
                // window.confirmationResult = confirmationResult
                // let code = window.prompt('Enter OTP:')
                // if (code == null) return
                confirmation = confirmationResult
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false)
                Error('Cannot send SMS!')
            })
    }
    const onClose = () => {
        toggle()
        setOTP('')
        setPhoneNumber('')
        setShowOTP(false)
    }
    return (
        <>
            <Modal isShowing={isShowing} hide={onClose}>
                {isLoading ? <PuffLoader /> : ''}
                <div>
                    <input type="text" value={phoneNumber} onChange={handleChangePhoneNumber} />
                    <label>PhoneNumber</label>
                </div>
                {isShowOTP ? (
                    <>
                        <input type="text" value={OTP} onChange={handleChangeOTP} />
                        <label>OTP Code</label>
                        <button onClick={handleOTP}>Xác thực</button>
                    </>
                ) : (
                    <button onClick={onSignInSubmit}>Gửi mã xác nhận</button>
                )}
            </Modal>
        </>
    )
}
PhoneModal.propsType = {
    isShowing: PropTypes.bool,
    toggle: PropTypes.func,
}
export default PhoneModal
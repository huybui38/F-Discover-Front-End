/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../../../components/Button'
import TextFieldInput from '../../../components/Input/TextField'
import { PuffLoader } from '../../../components/Loading/Loader'
import Modal from '../../../components/Modal/Modal'

import Phone from '../../../assets/phone.png'
import { Error, Success } from '../../../helpers/notify'
import firebase, { FirebaseAuth } from '../../../services/authentication/'

let confirmation
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
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
                Success('Phone')
                onSuccess(result)
                setShowOTP(false)
            })
            .catch((e) => {
                console.log(e)
                Error('Your OTP code is not correct')
            })
    }
    const onSignInSubmit = () => {
        setIsLoading(true)
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerify)
            .then((confirmationResult) => {
                setIsLoading(false)
                Success('Send OTP successfully! Check your phone to get the OTP code!')
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
                <Container>
                    <img src={Phone} style={{ width: '50px' }} />
                    <TextFieldInput
                        label="PhoneNumber"
                        value={phoneNumber}
                        handleChange={handleChangePhoneNumber}
                    ></TextFieldInput>
                    {/* <input type="text" onChange={handleChangePhoneNumber} /> */}
                    {/* <label>PhoneNumber</label> */}
                    {isShowOTP ? (
                        <>
                            <TextFieldInput
                                label="OTP Code"
                                value={OTP}
                                handleChange={handleChangeOTP}
                            ></TextFieldInput>
                            <Button onClick={handleOTP}>Confirm</Button>
                        </>
                    ) : (
                        <Button onClick={onSignInSubmit}>Send OTP</Button>
                    )}
                    {isLoading ? <PuffLoader /> : ''}
                </Container>
            </Modal>
        </>
    )
}
PhoneModal.propsType = {
    isShowing: PropTypes.bool,
    toggle: PropTypes.func,
}
export default PhoneModal

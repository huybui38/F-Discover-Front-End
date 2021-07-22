import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { CircleButton } from '../../../components/Button'
// import ButtonWithIcons, { EmptyIconButton } from '../../../components/ButtonWithIcons'
import { TextFieldInput } from '../../../components/Input'
import Modal from '../../../components/Modal/Modal'

import { Error, Success } from '../../../helpers/notify'
import useInput from '../../../hooks/useInput'
import { updateProfile } from '../../../services/user/profile'
import {
    fetchUserBio,
    onUpdateProfileSuccess,
    resetProfileState,
    setLoading,
} from '../profileSlice'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
function UpdateProfileModal(props) {
    const { toggle, isShowing } = props
    const details = useSelector((state) => state.profile.selfBioDetail)
    const dispatch = useDispatch()
    const [name, nameHandler, setName] = useInput(details.name)
    const [job, jobHandler, setJob] = useInput(details.job)
    const [bio, bioHandler, setBio] = useInput(details.quote)
    const bioFetchStatus = useSelector((state) => state.profile.status.fetchUserBio)
    useEffect(() => {
        dispatch(fetchUserBio())
    }, [dispatch])
    // useEffect(() => {
    //     return () => {
    //         dispatch(resetProfileState())
    //     }
    // }, [])
    const closeModalHandler = () => {
        toggle()
    }
    const saveHandler = () => {
        dispatch(setLoading(true))
        updateProfile(name, job, bio).then((result) => {
            dispatch(setLoading(false))
            if (result === -1) Error('Update failed!')
            else {
                Success('Update successfully')
                if (result.name) {
                    dispatch(onUpdateProfileSuccess(result))
                } else console.log('[OnUpdateProfileSuccess] Not found name property', result)
            }
        })
    }
    useEffect(() => {
        setName(details.name)
    }, [details.name, setName])
    useEffect(() => {
        setJob(details.job)
    }, [details.job, setJob])
    useEffect(() => {
        setBio(details.quote)
    }, [details.quote, setBio])
    return (
        <div>
            <Modal isShowing={isShowing} hide={closeModalHandler} title="Update profile">
                <TextFieldInput value={name} handler={nameHandler} label="Name"></TextFieldInput>
                <TextFieldInput value={job} handler={jobHandler} label="Job"></TextFieldInput>
                <TextFieldInput value={bio} handler={bioHandler} label="Bio"></TextFieldInput>
                <ButtonContainer onClick={saveHandler}>
                    <CircleButton center>Save</CircleButton>
                </ButtonContainer>
            </Modal>
        </div>
    )
}

UpdateProfileModal.propTypes = {
    toggle: PropTypes.func,
    isShowing: PropTypes.bool,
}

export default UpdateProfileModal

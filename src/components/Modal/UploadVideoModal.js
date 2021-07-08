import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { MdFileUpload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useToastContainer } from 'react-toastify'
import styled, { css, keyframes } from 'styled-components'

import { Error, Success } from '../../helpers/notify'
import useInput from '../../hooks/useInput'
import { updateProfile } from '../../services/user/profile'
import { Button, CircleButton } from '..//Button'
import { TextFieldInput } from '../Input'
import { Typography } from '../Typography'
// import { onUpdateProfileSuccess, setLoading } from '../profileSlice'
import Modal from './Modal'

const rotate = keyframes`
  from {
    border-radius: 20px;
  }

  to {
    border-radius: 50%;
  }
`
const pulse = keyframes`
  from {
    transform: scale(1);
    border-radius: 50%;
  }

  to {
    border-radius: 50%;
    transform: scale(1.3);
    background-color:#01B3A750;
  }
`
const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`
const UploadLogo = styled.div`
    padding: 10px;
    background-color: #9b999e60;
    border-radius: 20px;
    height: 50px;
    ${(props) =>
        props.isDragging &&
        css`
            /* animation: 0.3s linear;
        animation-fill-mode: forwards; */
            animation: ${rotate}, ${pulse};
            animation-duration: 0.3s, 0.4s;
            /* animation-fill-mode: forwards;
        animation-timing-function: linear; */
            animation-fill-mode: forwards, unset;
            animation-timing-function: linear, linear;
            animation-direction: alternate;
            animation-iteration-count: 1, infinite;
            animation-play-state: running;
            animation-delay: 0s, 0.3s;
        `}
`
const ButtonContainer = styled.div`
    display: flex;
    /* flex-direction: row-reverse; */
`
const BrowseButton = styled(Button)`
    background-color: ${(props) => props.theme.color.primary};
    padding: 5px;
`
const MainText = styled(Typography)`
    padding: 10px;
`
const SecondText = styled(Typography)`
    font-size: 0.7rem;
    padding-bottom: 10px;
`
function UpdateVideoModal(props) {
    const { toggle, isShowing } = props
    const details = useSelector((state) => state.profile.bioDetail)
    const dispatch = useDispatch()
    const [name, nameHandler, setName] = useInput(details.name)
    const [job, jobHandler, setJob] = useInput(details.job)
    const [bio, bioHandler, setBio] = useInput(details.quote)
    const closeModalHandler = () => {
        toggle()
    }
    const [isDragging, setIsDragging] = useState(false)
    const saveHandler = () => {}
    useEffect(() => {
        setName(details.name)
    }, [details.name, setName])
    useEffect(() => {
        setJob(details.job)
    }, [details.job, setJob])
    useEffect(() => {
        setBio(details.quote)
    }, [details.quote, setBio])
    const onDragEnter = () => {
        console.log(isDragging)
        if (isDragging === false) {
            setIsDragging((state) => {
                if (state === false) return !state
                return state
            })
        }
    }
    return (
        <div>
            <Modal isShowing={isShowing} hide={closeModalHandler} title="Update a video">
                <UploadContainer>
                    <UploadLogo
                        onDragEnter={onDragEnter}
                        onDragLeave={() => setIsDragging(false)}
                        isDragging={isDragging}
                    >
                        <MdFileUpload color="#626164" size={50} />
                    </UploadLogo>
                    <MainText>Drag & drop file you want to upload</MainText>
                    <SecondText>Maximum 15mb</SecondText>
                    <ButtonContainer onClick={saveHandler}>
                        <BrowseButton center>Browse</BrowseButton>
                    </ButtonContainer>
                </UploadContainer>
            </Modal>
        </div>
    )
}

UpdateVideoModal.propTypes = {
    toggle: PropTypes.func,
    isShowing: PropTypes.bool,
}

export default UpdateVideoModal

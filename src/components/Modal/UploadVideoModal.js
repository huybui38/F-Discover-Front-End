/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'

import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useToastContainer } from 'react-toastify'
import styled, { css, keyframes } from 'styled-components'

import { Error, Success } from '../../helpers/notify'
import useInput from '../../hooks/useInput'
import { updateProfile } from '../../services/user/profile'
import { Button, CircleButton } from '..//Button'
import { TextFieldInput } from '../Input'
import { Dropdown } from '../Input/Dropdown'
import { SimpleCircleLoader } from '../Loading/Loader'
import { ProgressBar } from '../Progress/Progress'
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
    const [isUploading, setIsUploading] = useState(false)
    const [step, setStep] = useState(1)
    const closeModalHandler = () => {
        toggle()
    }
    const [progressStatus, setProgressStatus] = useState(0)
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

    const onDrop = () => {
        setIsUploading(true)
        const id = setInterval(() => {
            setProgressStatus((progressStatus) => progressStatus + 1)
        }, 1000)
        setTimeout(() => {
            clearInterval(id)
            setStep(2)
            setIsUploading(false)
        }, 10000)
    }

    const StepOne = () => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
        return (
            <>
                <UploadLogo {...getRootProps()} isDragging={isDragActive}>
                    <input {...getInputProps()} />
                    <MdFileUpload color="#626164" size={50} />
                </UploadLogo>
                <MainText>Drag & drop file you want to upload</MainText>
                <SecondText>Maximum 15mb</SecondText>
                <ButtonContainer onClick={saveHandler}>
                    <BrowseButton center>Browse</BrowseButton>
                </ButtonContainer>
            </>
        )
    }
    const StepTwo = () => {
        const locations = [
            {
                value: 'Hello',
                text: 'Hello Text',
            },
        ]
        return (
            <>
                <h1>Step two</h1>
                <TextFieldInput label="Tên video"></TextFieldInput>
                <Dropdown options={locations} />
            </>
        )
    }
    const StepMapper = ({ step, ...rest }) => {
        console.log('Mapper', step)
        switch (step) {
            case 1:
                return <StepOne {...rest} />
            case 2:
                return <StepTwo {...rest} />
            default:
                return ''
        }
    }
    console.log('Re-render')
    return (
        <div>
            <Modal isShowing={isShowing} hide={closeModalHandler} title="Update a video">
                <UploadContainer>
                    {isUploading ? (
                        <>
                            <SimpleCircleLoader />
                            <ProgressBar number={progressStatus} />
                        </>
                    ) : (
                        <StepMapper step={step}></StepMapper>
                        // <>
                        //     <UploadLogo {...getRootProps()} isDragging={isDragActive}>
                        //         <input {...getInputProps()} />
                        //         <MdFileUpload color="#626164" size={50} />
                        //     </UploadLogo>
                        //     <MainText>Drag & drop file you want to upload</MainText>
                        //     <SecondText>Maximum 15mb</SecondText>
                        //     <ButtonContainer onClick={saveHandler}>
                        //         <BrowseButton center>Browse</BrowseButton>
                        //     </ButtonContainer>
                        // </>
                    )}
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

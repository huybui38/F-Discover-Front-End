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
import { uploadVideo } from '../../services/user/upload'
import apiCaller from '../../utils/apiCaller'
import { Button, CircleButton } from '..//Button'
import { TextFieldInput } from '../Input'
import { Dropdown } from '../Input/Dropdown'
import { SimpleCircleLoader } from '../Loading/Loader'
import { ProgressBar } from '../Progress/Progress'
import { Typography } from '../Typography'
// import { onUpdateProfileSuccess, setLoading } from '../profileSlice'
import Modal from './Modal'
import { StepOne } from './UploadVideoModal/StepOne'
import { StepTwo } from './UploadVideoModal/StepTwo'

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`
function UpdateVideoModal(props) {
    const { toggle, isShowing } = props
    const details = useSelector((state) => state.profile.bioDetail)
    const dispatch = useDispatch()
    const [isUploading, setIsUploading] = useState(false)
    const [step, setStep] = useState(1)
    const [videoID, setVideoID] = useState(null)
    const closeModalHandler = () => {
        toggle()
    }
    const [progressStatus, setProgressStatus] = useState(0)
    const onUploadProgress = (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log(percentCompleted)
        setProgressStatus(percentCompleted)
    }
    const onDrop = (files) => {
        if (files.length === 0) return
        const file = files[0]
        const formData = new FormData()
        formData.append('video', file)
        setIsUploading(true)

        uploadVideo(formData, onUploadProgress)
            .then((result) => {
                const { id, videoUrl } = result.data
                console.log('Set id', id)
                setVideoID(id)
                setStep(2)
                Success('upload thành công')
            })
            .finally(() => setIsUploading(false))

        // const id = setInterval(() => {
        //     setProgressStatus((progressStatus) => progressStatus + 1)
        // }, 1000)
        // setTimeout(() => {
        //     clearInterval(id)
        //     setStep(2)
        //     setIsUploading(false)
        // }, 10000)
    }

    const StepMapper = ({ step, ...rest }) => {
        switch (step) {
            case 1:
                return <StepOne {...rest} onDrop={onDrop} />
            case 2:
                return <StepTwo {...rest} videoID={videoID} />
            default:
                return ''
        }
    }
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

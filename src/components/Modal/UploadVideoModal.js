/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Error, Success } from '../../helpers/notify'
import { uploadVideo } from '../../services/user/upload'
import { SimpleCircleLoader } from '../Loading/Loader'
import { ProgressBar } from '../Progress/Progress'
import { Typography } from '../Typography'
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
    const { toggle, isShowing, onSuccess } = props
    const [isUploading, setIsUploading] = useState(false)
    const [step, setStep] = useState(1)
    const [videoID, setVideoID] = useState(null)
    const closeModalHandler = (isSuccess) => {
        toggle()
        setIsUploading(false)
        setStep(1)
        setProgressStatus(5)
        setVideoID(null)
        if (isSuccess === true) {
            onSuccess()
        }
    }
    const [progressStatus, setProgressStatus] = useState(5)
    const onUploadProgress = (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
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
                if (!result.data) {
                    Error(result.message)
                    return
                }
                const { id, videoUrl } = result.data
                setVideoID(id)
                setStep(2)
            })
            .finally(() => setIsUploading(false))
    }

    const StepMapper = ({ step, ...rest }) => {
        switch (step) {
            case 1:
                return <StepOne {...rest} onDrop={onDrop} />
            case 2:
                return <StepTwo {...rest} videoID={videoID} onSuccess={closeModalHandler} />
            default:
                return ''
        }
    }
    return (
        <div>
            <Modal isShowing={isShowing} hide={closeModalHandler} title="Choose your video">
                <UploadContainer>
                    {isUploading ? (
                        <>
                            <Typography>
                                Please wait while we are processing your video (Does not close this
                                site)
                            </Typography>
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
